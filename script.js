/**
 * ラグビークイズ：堅牢版クライアントスクリプト
 * - file:// で開いても動く三段フォールバックでクイズデータを読込
 * - DOM未配置や音声要素欠如でも落ちない防御的コーディング
 * - 難易度ごとの問題数が不足していても自動フォールバック
 */

// ========================== グローバル ==========================
let reviewMode = false;
let quiz = [];
let selectedQuiz;
let selectedDifficulty = 'easy';
let countdownTimerInterval;
let timer;
const totalQuestions = 20;
let totalCount = totalQuestions;
const FEEDBACK_MS = 500; // 〇/×の表示時間（ms）
let answeringLock = false;
let current = 0;
let score = 0;
let remainingSeconds = 300;
let sessionHighScore = 0;
let wrongAnswers = [];

// DOM 取得
const app = document.getElementById("app");
const questionCount = document.getElementById("question-count");
const thanksMessage = document.getElementById("thanks-message");
const countdownTimer = document.getElementById("countdown-timer");
if (typeof window.isMuted === 'undefined') window.isMuted = false;
const correctSound = document.getElementById('correct-sound');
const incorrectSound = document.getElementById('incorrect-sound');
const muteButton = document.getElementById('mute-button');

// ========================== データ読込 ==========================
async function loadQuizData() {
  const inline = document.getElementById('quiz-data');
  const text = inline && inline.textContent && inline.textContent.trim();
  if (text) {
    try {
      quiz = JSON.parse(text);
    } catch (e) {
      throw new Error('埋め込みJSONの構文エラー: ' + e.message);
    }
    return;
  }
  if (Array.isArray(window.QUIZ_DATA)) {
    quiz = window.QUIZ_DATA;
    return;
  }
  if (location.protocol === 'http:' || location.protocol === 'https:') {
    const res = await fetch('./quiz-questions.json?v=amber4', { cache: 'no-cache' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    quiz = await res.json();
    return;
  }
  throw new Error('クイズデータが見つかりません（inline/QUIZ_DATA/http のいずれも不可）');
}

// ========================== ヘルパー ==========================
function shuffleArray(array) {
  const copied = [...array];
  for (let i = copied.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }
  return copied;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${minutes}:${sec.toString().padStart(2, "0")}`;
}

// ========================== タイマー ==========================
function startTimer() {
  clearTimeout(timer);
  timer = setTimeout(showResult, 1000 * remainingSeconds);
}

function startCountdown() {
  if (countdownTimer) {
    countdownTimer.textContent = `残り時間：${formatTime(remainingSeconds)}`;
  }
  clearInterval(countdownTimerInterval);
  countdownTimerInterval = setInterval(() => {
    remainingSeconds--;
    if (countdownTimer) {
      countdownTimer.textContent = `残り時間：${formatTime(remainingSeconds)}`;
    }
    if (remainingSeconds <= 0) {
      clearInterval(countdownTimerInterval);
    }
  }, 1000);
}

// ========================== 出題/採点 ==========================
function showQuestion() {
  if (!app) { console.error('#app が見つかりません'); return; }
  document.body.classList.remove('result-mode');
  app.classList.remove('result-screen');
  const q = selectedQuiz[current];
  if (!q) { app.innerHTML = "<p>問題の読み込みに失敗しました。</p>"; return; }
  if (questionCount) {
    questionCount.innerText = `Q${current + 1} / ${totalCount}`;
    questionCount.style.display = "block";
  }
  app.innerHTML = `
    <h2 id="question-title">${q.question}</h2>
    ${q.choices.map((c, i) =>
      `<button class="answer-btn" data-idx="${i}" onclick="checkAnswer(${i})">${c}</button>`
    ).join("<br>")}
  `;
  renderProgress();
}

function checkAnswer(choice) {
  if (answeringLock) return;
  answeringLock = true;
  const q = selectedQuiz[current];
  const isCorrect = (choice === q.answer);
  if (isCorrect) {
    score++;
  } else {
    wrongAnswers.push({ question: q.question, correctAnswerIndex: q.answer, correctAnswerText: q.choices[q.answer], selectedAnswerIndex: choice, selectedAnswerText: q.choices[choice], explanation: q.explanation });
  }
  showFeedback(isCorrect, q.explanation);
}

function showFeedback(isCorrect, explanation) {
  const overlay = document.getElementById('feedback-overlay');
  const mark = document.getElementById('feedback-mark');
  if (!overlay || !mark) {
    if (!window.isMuted) { try { (isCorrect ? correctSound : incorrectSound)?.play(); } catch (_) {} }
    setTimeout(() => afterFeedback(isCorrect, explanation), FEEDBACK_MS);
    return;
  }
  overlay.className = 'show';
  mark.className = '';
  mark.textContent = isCorrect ? '〇' : '×';
  mark.classList.add(isCorrect ? 'correct' : 'incorrect');
  const h2 = document.getElementById('question-title') || document.querySelector('#app h2');
  if (h2) {
    const r = h2.getBoundingClientRect();
    mark.style.left = `${r.left + r.width / 2}px`;
    mark.style.top = `${r.top + r.height / 2}px`;
  } else {
    const vw = document.documentElement.clientWidth || window.innerWidth || 0;
    const vh = document.documentElement.clientHeight || window.innerHeight || 0;
    mark.style.left = `${vw / 2}px`;
    mark.style.top = `${vh / 2}px`;
  }
  if (!window.isMuted) { try { (isCorrect ? correctSound : incorrectSound)?.play(); } catch (_) {} }
  setTimeout(() => {
    overlay.className = '';
    afterFeedback(isCorrect, explanation);
  }, FEEDBACK_MS);
}

function afterFeedback(isCorrect, explanation) {
  if (!app) return;
  if (current < totalCount - 1) {
    app.innerHTML = `
      <div class="result ${isCorrect ? "correct" : "incorrect"}">
        <h2>${isCorrect ? "〇 正解！" : "× ざんねん…"}</h2>
        <p>${explanation || ""}</p>
        <button onclick="reviewQuestion()">問題文をもう一度見る</button>
        <button onclick="nextQuestion()">次の問題へ</button>
      </div>`;
  } else {
    showResult();
  }
}

function reviewQuestion() {
  if (!app) return;
  const q = selectedQuiz[current];
  if (!q) { app.innerHTML = "<p>この問題は表示できません。</p>"; return; }
  app.innerHTML = `
    <h2 id="question-title">${q.question}</h2>
    <p style="margin-top: 1em; color: #2c3e50;">※この問題は確認用です</p>
    <br>
    <button onclick="nextQuestion()">次の問題へ</button>
  `;
}

function nextQuestion() {
  answeringLock = false;
  current++;
  (current < totalCount) ? showQuestion() : showResult();
}

function showResult() {
  if (!app) return;
  clearInterval(countdownTimerInterval);
  clearTimeout(timer);
  document.body.classList.add('result-mode');
  app.classList.add('result-screen');
  const lastScore = Number(localStorage.getItem("lastScore") || 0);
  const highScore = Number(localStorage.getItem("highScore") || 0);
  if (score > highScore) localStorage.setItem("highScore", score);
  localStorage.setItem("lastScore", score);
  if (countdownTimer) countdownTimer.style.display = "none";
  if (questionCount) questionCount.style.display = "none";
  if (thanksMessage) thanksMessage.style.display = "block";
  answeringLock = false;
  let html = `
    <h2 id="result-top">結果発表！</h2>
    <div class="result-summary">
      <p>今回のスコア：${score}問（全${totalCount}問中）</p>
      <p>前回のスコア：${lastScore}問</p>
      <button onclick="restart()">もう一度チャレンジ！</button><button onclick="showDifficultySelection()" class="btn-secondary">最初の画面に戻る</button>
    </div>`;
  if (score < totalCount && wrongAnswers.length > 0) {
    let wrongList = '<h3>間違えた問題と正解</h3><ul class="wrong-list">';
    wrongAnswers.forEach((w) => {
      wrongList +=
        '<li class="wrong-item">' +
        '<div class="wrong-q">' + w.question + '</div>' +
        '<div class="wrong-answers">' +
        '<span class="badge badge-correct">正解</span>' +
        '<span class="ans ans-correct">' + w.correctAnswerText + '</span>' +
        '<span class="badge badge-your">あなたの回答</span>' +
        '<span class="ans ans-your">' + w.selectedAnswerText + '</span>' +
        '</div>' +
        (w.explanation ? '<div class="wrong-exp">' + w.explanation + '</div>' : '') +
        '</li>';
    });
    wrongList += '</ul>';
    html += wrongList;
  }
  app.innerHTML = html;
  setTimeout(() => {
    const t = document.getElementById('result-top');
    if (t && t.scrollIntoView) t.scrollIntoView({ block: 'start' });
    window.scrollTo && window.scrollTo({ top: 0, left: 0 });
  }, 0);
}

// ========================== 進捗バー ==========================
function renderProgress() {
  if (!app) return;
  let bar = document.getElementById('progress');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'progress';
    bar.innerHTML = '<span></span>';
    app.prepend(bar);
  }
  const denom = Math.max(1, totalCount);
  const pct = Math.min(100, Math.round((current / denom) * 100));
  const span = bar.querySelector('span');
  if (span) span.style.width = pct + '%';
}

// ========================== フロー制御 ==========================
function showDifficultySelection() {
  if (!app) return;
  document.body.classList.remove('result-mode', 'theme-easy', 'theme-medium', 'theme-hard');
  app.classList.remove('result-screen');
  app.innerHTML = `
    <div id="difficulty-selection">
      <h2>難易度を選んでスタート！</h2>
      <button type="button" onclick="startQuiz('easy')">かんたん</button>
      <button type="button" onclick="startQuiz('medium')">ふつう</button>
      <button type="button" onclick="startQuiz('hard')">むずかしい</button>
    </div>`;
  if (countdownTimer) countdownTimer.style.display = "none";
  if (questionCount) questionCount.style.display = "none";
  if (thanksMessage) thanksMessage.style.display = "none";
}

function restart() {
  if (!app) return;
  document.body.classList.remove('result-mode');
  answeringLock = false;
  app.classList.remove('result-screen');
  clearInterval(countdownTimerInterval);
  clearTimeout(timer);
  current = 0;
  score = 0;
  remainingSeconds = 300;
  wrongAnswers = [];
  const filtered = quiz.filter(q => q.level === selectedDifficulty);
  const pool = filtered.length ? filtered : quiz;
  if (!pool.length) {
    app.innerHTML = '<p>出題できる問題が見つかりません。データをご確認ください。</p>';
    return;
  }
  selectedQuiz = shuffleArray([...pool]).slice(0, totalQuestions);
  totalCount = Math.min(totalQuestions, selectedQuiz.length);
  if (countdownTimer) countdownTimer.style.display = "block";
  startCountdown();
  startTimer();
  if (thanksMessage) thanksMessage.style.display = "none";
  if (questionCount) questionCount.style.display = "block";
  showQuestion();
}

function startQuiz(level) {
  if (level === 'easy') {
    selectedDifficulty = level;
    const body = document.body;
    body.classList.remove('theme-easy', 'theme-medium', 'theme-hard');
    body.classList.add(`theme-${level}`);
    if (app) app.innerHTML = '';
    restart();
  } else {
    alert('この難易度は現在準備中です。お楽しみに！');
  }
}

// ========================== 初期化（一本化） ==========================
window.onload = async () => {
  try {
    await loadQuizData();
    showDifficultySelection();
    if (muteButton) {
      muteButton.addEventListener('click', () => {
        window.isMuted = !window.isMuted;
        muteButton.textContent = window.isMuted ? '🔇' : '🔊';
        muteButton.classList.toggle('muted', window.isMuted);
      });
    }
  } catch (e) {
    console.error('クイズデータの読み込みエラー:', e);
    if (app) app.innerHTML = '<p>クイズの読み込み中にエラーが発生しました。</p>';
  }
};

// ========================== グローバル公開 ==========================
window.startQuiz = startQuiz;
window.checkAnswer = checkAnswer;
window.nextQuestion = nextQuestion;
window.reviewQuestion = reviewQuestion;
window.restart = restart;
