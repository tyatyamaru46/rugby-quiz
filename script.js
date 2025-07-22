let reviewMode = false;


const quiz = [
  {
    question: "スクラムは3人で組む？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【スクラム】3人で組んで真ん中の人がボールを足で出す"
  },
  {
    question: "ラックは寝てボールを取り合う？",
    choices: ["○", "×"],
    answer: 1,
    explanation: "【ラック】地面にあるボールを立って取り合う"
  },
  {
    question: "モールは立ったまま押し合いながら進む？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【モール】ボールを持ったまま立って押し合う"
  },
  {
    question: "ラインアウトはボールが外に出た時におこなう？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【ラインアウト】外に出たボールを投げ入れる"
  },
  {
    question: "タックルは相手を止めるプレー？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【タックル】相手を止めるプレー"
  },
  {
    question: "パスは前に投げてもいい？",
    choices: ["○", "×"],
    answer: 1,
    explanation: "【パス】ラグビーはボールを前に投げてはいけない"
  },
  {
    question: "ノックオンはボールを前に落とすこと？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【ノックオン】手から前にボールを落とすと反則になる"
  },
  {
    question: "ハイタックルは胸より上のタックル？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【ハイタックル】胸より上をタックルすると反則"
  },
  {
    question: "オフサイドはボールより前にいるとオフサイドになる？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【オフサイド】決められた位置より前に出ていると反則"
  },
  {
    question: "ノットリリースザボールはボールを持ったまま立ち上がること？",
    choices: ["○", "×"],
    answer: 1,
    explanation: "【ノットリリースザボール】倒れてボールをはなさないと取られる反則"
  },
  {
    question: "ノットロールアウェイはタックル後にすぐどかないこと？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【ノットロールアウェイ】タックルした人はすぐにどかないと反則"
  },
  {
    question: "スクラムでは真ん中の人がボールを出す？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【スクラム】真ん中のプレーヤーが足でボールを出す"
  },
  {
    question: "ラインアウトはジャンプしてキャッチする？",
    choices: ["○", "×"],
    answer: 1,
    explanation: "【ラインアウト】中学年はボールの取り合いは禁止。ジャンプして取らない。"
  },
  {
    question: "タックルされたけど、すぐ立って走った。良いプレー？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【タックル後のプレー】倒れたらボールを置く。立ち上がってボールを拾っても良い。"
  },
  {
    question: "中学年は、ボールをけるときドロップキックとタップキックしか使えない？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【キック】中学年はドロップキックとタップキックだけである"
  },
  {
    question: "ボールを持っていない人にタックルしてもよい？",
    choices: ["○", "×"],
    answer: 1,
    explanation: "【ノーボールタックル】ボールを持ってない人にはタックルしない"
  },
  {
    question: "パイルアップになったらスクラムで再開？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【パイルアップ】ラック、モールでボールが出ないとボールを持ち込んだ逆側のスクラムになる"
  },
  {
    question: "モールでボールが出なければ相手ボールのスクラムになる？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【モール】ボールを持ってないチームのスクラムで再開"
  },
  {
    question: "ローヘッドは頭を低くしてヒットされそうなときに取られる反則？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【ローヘッド】頭が肩や腰より低くなると危険で反則"
  },
  {
    question: "スティールはボールを奪うプレー？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【スティール】倒れた相手からボールをうまく取ること"
},
{
  question: "ハンドオフはグーで相手を押してもいい？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【ハンドオフ】手のひらで押すのはOK、グーはだめ"
},
{
  question: "ボールを持った相手を振り回してもよい？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【危険なタックル】相手をつかんだらすぐ倒す、振り回してはダメ"
},
{
  question: "逆ヘッドでタックルしてたおした。これは良いタックル？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【逆ヘッド】頭を前にしたタックルは危険なプレーで反則"
},
{
  question: "5m下がらないでディフェンスで前に出た。タックルは別の友だちがした。",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【ノット5m】決められた距離を下がらないと反則になる"
},
{
  question: "ノックバックは前にボールを落とすこと？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【ノックバック】後ろに落とすのは反則じゃない。ノックオンは取られない。"
},
{
  question: "タップキックはボールを軽くキックしてスタートする？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【タップキック】ボールを地面に置いて軽くキックして始めるプレー"
},
{
  question: "スクイーズボールは反則？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【スクイーズボール】ボールをお腹の下にかくして足から出すのは反則"
},
{
  question: "スワーブはまっすぐ走るプレー？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【スワーブ】相手を避けるようにカーブして走ること"
},
{
  question: "セービングは地面のボールを取りに飛び込むこと？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【セービング】地面にあるボールに飛びついて取るプレー"
},
{
  question: "デコイはパスを受けるふりをして相手を引きつける？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【デコイ】パスをもらうふりをして相手を引きつける"
},
{
  question: "フライングウェッジは3人でかたまって走ること？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【フライングウェッジ】2人以上でかたまって走って当たると反則"
},
{
  question: "ラッチは味方がボールを持つ人にくっつくこと？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【ラッチ】味方がボールを持った人の体にくっつくプレー"
},
{
  question: "ノーサイドは試合が終わった後のこと？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【ノーサイド】試合が終わったら敵も味方もなくなるという考え方"
},
{
  question: "キックチャージで前にボールが落ちてもノックオン？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【キックチャージ】相手のキックを体で止めたらノックオンじゃない"
},
{
  question: "ペナルティキックのときは5m下がる？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【ペナルティキック】反則のときは相手から5m以上下がる"
},
{
  question: "5mスクラムはペナルティのときに行う？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【5mスクラム】インゴールでのプレーの後に行われる"
},
{
  question: "キャリーバックは自分でインゴールに戻すこと？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【キャリーバック】自分でインゴールに入れて地面につけると反則になる"
},
{
  question: "ゴールラインドロップアウトは相手の攻撃が失敗したときに行う？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【ゴールラインドロップアウト】相手がインゴールで得点できなかったときの再開プレー"
},
{
  question: "50:22キックは自分のボールになる？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【50:22キック】自陣からキックして相手陣地でバウンドして出ると自分のボールになる"
},
{
  question: "キックでタッチラインを越えたら、必ず相手ボールになる？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【ダイレクトタッチ】場所や状況によっては自分のボールになることもある"
},
{
    question: "スローフォワードは相手ボールのスクラムになる？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【スローフォワード】前に投げてしまうと相手のスクラムになる"
  },
  {
    question: "ノックオンは相手のペナルティになる？",
    choices: ["○", "×"],
    answer: 1,
    explanation: "【ノックオン】相手のスクラムになるけどペナルティではない"
  },
  {
    question: "タップキックのときは必ず走って始める？",
    choices: ["○", "×"],
    answer: 1,
    explanation: "【タップキック】ボールをけってからスタートすればゆっくりでもOK"
  },
  {
    question: "アドバンテージは反則があっても試合を止めない？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【アドバンテージ】反則があっても有利ならプレーを続ける"
  },
  {
    question: "アドバンテージオーバーは不利になったら言う言葉？",
    choices: ["○", "×"],
    answer: 1,
    explanation: "【アドバンテージオーバー】有利になったから反則を適用しないときの合図"
  },
  {
    question: "ノミネートは自分が守る相手を決めること？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【ノミネート】守る相手をあらかじめ決めておくこと"
  },
  {
    question: "ピラーはラックやモールの近くに立つ選手？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【ピラー】ラックのすぐ横に立って守る選手"
  },
  {
    question: "順目は攻撃の流れと逆方向？",
    choices: ["○", "×"],
    answer: 1,
    explanation: "【順目】攻撃の流れと同じ方向のこと"
  },
  {
    question: "チャンネルは攻撃の通る道のこと？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【チャンネル】どの場所を攻めるかというエリアの呼び方"
  },
  {
    question: "トイメンは向かい合っている味方？",
    choices: ["○", "×"],
    answer: 1,
    explanation: "【トイメン】向かい合っている相手のこと"
  },
  {
    question: "ノーボールタックルは相手がボールを持っていなくてもOK？",
    choices: ["○", "×"],
    answer: 1,
    explanation: "【ノーボールタックル】ボールを持ってない人にはタックルしちゃダメ"
  },
  {
    question: "ショルダーチャージは反則じゃない？",
    choices: ["○", "×"],
    answer: 1,
    explanation: "【ショルダーチャージ】肩だけで当たるのは危ないから反則"
  },
  {
    question: "レイトタックルはボールを投げた後にタックルすること？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【レイトタックル】パスしたあとに遅れてタックルするのは反則"
  },
  {
    question: "ノーバインドタックルはしっかりつかまないタックル？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【ノーバインドタックル】しっかりつかまずぶつかるのは危ないので反則"
  },
  {
    question: "ノーヘッドは頭を低くしてプレーすること？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【ノーヘッド】頭が下がりすぎていると危なくて反則になる"
  },
  {
    question: "逆ヘッドはお尻側に頭が来るタックル？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【逆ヘッド】頭が正しい位置にないタックルで危ないので反則"
  },
  {
    question: "ハンドオフは手で相手を押すプレー？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【ハンドオフ】手で相手を押しのけるプレー"
  },
  {
    question: "顔にハンドオフが当たってもOK？",
    choices: ["○", "×"],
    answer: 1,
    explanation: "【ハンドオフ】顔に当たると危険なプレーで反則"
  },
  {
    question: "ハンドオフでグーで押してもOK？",
    choices: ["○", "×"],
    answer: 1,
    explanation: "【ハンドオフ】手のひらで押すのはOKだけど、グーは危ないからダメ"
  },
  {
    question: "相手を振り回すタックルはしていい？",
    choices: ["○", "×"],
    answer: 1,
    explanation: "【タックル】つかんだらすぐに倒す、振り回すと危ないのでダメ"
  },
  {
    question: "後ろから肩口をつかんで倒してもいい？",
    choices: ["○", "×"],
    answer: 1,
    explanation: "【タックル】正面か横から、肩より下でタックルする"
  },
  {
    question: "スティールで足をそろえると危ない？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【スティール】足をそろえるとバランスを崩しやすく危険"
  },
  {
    question: "HIAは頭のケガをチェックする方法？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【HIA】頭を打ったときに安全かどうか確認するテスト"
  },
  {
    question: "クールダウンは試合の後に体を休めること？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【クールダウン】試合後にゆっくり動いて体を整えること"
  },
  {
    question: "オーバーザトップは倒れこんでボールをふさぐ反則？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【オーバーザトップ】ラックで上に倒れこんでボールをふさぐのは反則"
  },
  {
    question: "シーリングはボールの上に寝てふさぐプレー？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【シーリング】ボールの上に寝て味方に出させないのは反則"
  },
  {
    question: "パイルアップでボールが出なくなったらプレーを止める？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【パイルアップ】みんなが倒れてボールが出なかったらスクラムで再開"
  },
  {
    question: "ブラインドサイドは広い方のサイド？",
    choices: ["○", "×"],
    answer: 1,
    explanation: "【ブラインドサイド】スクラムや密集から見て狭い方のサイド"
  },
  {
    question: "オープンサイドは狭い方のサイド？",
    choices: ["○", "×"],
    answer: 1,
    explanation: "【オープンサイド】広い方のサイドのこと"
  },
  {
    question: "ゲインラインを越えると前に進んだことになる？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【ゲインライン】密集やスクラムから引いた線、そこを越えたら成功"
  },
  {
    question: "フェーズは1回の攻撃のまとまり？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【フェーズ】ボールを出して攻撃し、また止まるまでの1つの流れ"
  },
  {
    question: "リサイクルはボールを持ち続けること？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【リサイクル】ボールを大事にして次の攻撃につなげること"
  },
  {
    question: "スクリューパスはボールを回しながら投げる？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【スクリューパス】回転させて早く遠くに投げるパス"
  },
  {
    question: "オフロードパスはタックルされながら出すパス？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【オフロードパス】タックルされても仲間につなぐパス"
  },
  {
    question: "キックパスは足でボールをけってパスする？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【キックパス】パスの代わりにキックを使って仲間に渡すこと"
  },
  {
    question: "スローフォワードはペナルティ？",
    choices: ["○", "×"],
    answer: 1,
    explanation: "【スローフォワード】前にパスすると相手のスクラム"
  },
  {
    question: "ノックオンは相手ボールのスクラムになる？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【ノックオン】前に落とすと相手のスクラムになる"
  },
  {
    question: "ノックバックは後ろに落としたボール？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【ノックバック】後ろに落とすのは反則じゃない"
  },
  {
    question: "ノックオンオフサイドは味方の前にいた人がボールを触ること？",
    choices: ["○", "×"],
    answer: 0,
    explanation: "【ノックオンオフサイド】前にいた人が触るとペナルティ"
  },
  {
  question: "スクラムのバックスは3m後ろにいないといけない？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【スクラムオフサイド】バックスはスクラムの後ろから3m必要"
},
{
  question: "ハーフはスクラムで相手の後ろ足から1m以内に入れる？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【ハーフオフサイド】1m以上あけないと反則"
},
{
  question: "ラインアウトで守るときは3m以上あける？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【ラインアウトオフサイド】守るときは3m以上はなれる"
},
{
  question: "キックオフサイドはキックより前にいたらダメ？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【キックオフサイド】ボールをけった人より前にいたら反則"
},
{
  question: "自分で戻るか味方に追い越してもらえばオフサイド解消？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【オフサイド解消】戻るか味方が前に出ればOK"
},
{
  question: "味方のパスで自陣に戻ってから50:22キックをしてもOK？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【50:22】ハーフラインを越えてから戻ってけるとダメ"
},
{
  question: "キャリーバックのあと、相手の5mスクラムで再開？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【キャリーバック】インゴールで地面につけたら相手のスクラム"
},
{
  question: "ヘルドアップは得点できなかったら相手のボール？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【ヘルドアップ】地面につけられなかったら5mスクラムで守るチームのボール"
},
{
  question: "モールが進まなかったら、攻撃側のボールで再開？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【モール・アンプレアブル】モールで止まったら守ってたチームのスクラム"
},
{
  question: "ラックでボールが出なくなったら、攻撃側のボールで再開？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【ラック・アンプレアブル】止まったら有利なチームのスクラム"
},
{
  question: "アクシデンタルオフサイドはぶつかっただけでも反則？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【アクシデンタルオフサイド】味方同士でぶつかっても反則になることがある"
},
{
  question: "キックは地面のボールをけってもいい？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【キックのルール】地面にあるボールはけっちゃダメ"
},
{
  question: "ドロップキックはボールを落として跳ねたあとにける？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【ドロップキック】一度落としてからけるキック"
},
{
  question: "キックオフは5mラインを超えないといけない？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【キックオフ】相手側の5mを超えないとやり直し"
},
{
  question: "ミニラグビーのボールは軽い？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【ボール】小学生用の軽いボールを使う"
},
{
  question: "試合で使うフィールドは大人より小さい？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【フィールド】大人より小さいフィールドでプレーする"
},
{
  question: "プレー中の声かけはしてはいけない？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【コミュニケーション】声をかけて協力することが大事"
},
{
  question: "ボールを持ってる人を全員で止めにいっていい？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【ディフェンス】守る場所や相手を決めて動く"
},
{
  question: "ボールを持ってない人にぶつかってもOK？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【反則】ボールを持ってない人にはタックルできない"
},
{
  question: "ルールを守ることが大事？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【ラグビーの心】ルールを守って楽しくプレーする"
},
{
  question: "1人はみんなのために、みんなは1人のために。これはラグビーの精神？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【ワンフォーオール】ラグビーでは仲間を思いやる気持ちが大切"
},
{
  question: "相手が反則しても、自分たちがすぐボールを取って攻められたら、プレーして良い？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【アドバンテージオーバー】チャンスの方が大きかったら、反則はなかったことになるよ"
},
{
  question: "相手が投げたパスを、横から取って走り出すことを「インターセプト」という？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【インターセプト】パスをねらってキャッチ！そのまま走ってトライもできる"
},
{
  question: "ラックで相手の体にたおれこんで、ボールが出ないようにした。これは反則？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【オーバーザトップ】ラックで頭を下げた状態。ひざがついたままプレーしても反則"
},
{
  question: "ディフェンスの人と人のすきまをうまく走りぬけることを、「ギャップをつく」という？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【ギャップ】守りのすきまはチャンス！うまく見つけて走りぬこう"
},
{
  question: "タックルをしないで、肩でドン！と当たるのは「ショルダーチャージ」という反則？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【ショルダーチャージ】肩でぶつかるだけの当たり方はキケン！正しいタックルをしよう"
},
{
  question: "セービングとは体を投げ出して地面のボールを押さえるプレー？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【セービング】ボールを相手に取られる前に体を使ってチームのピンチをすくうプレー"
},
{
  question: "自分の前にいる相手を「トイメン」という？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【トイメン】前にいる相手をしっかり見る！その人に逃げられないようにするよ"
},
{
  question: "ボールを持っていない人にタックルをした。これは反則？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【ノーボールタックル】ボールを持っていない人にさわるのはダメ！あぶないプレー"
},
{
  question: "ボールを後ろにこぼしたら、プレーはつづけてOK？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【ノックバック】しんぱんの笛が鳴らなければ、続けてプレーしていいよ"
},
{
  question: "ボールを前にこぼして、そのボールを前にいた人がひろった。これはOK？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【ノックフォワードオフサイド】前にいた人がひろっちゃダメ！"
},
{
  question: "スクラムやラックでは、手でボールをさわってもいい？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【ハンド】スクラムやラックでは手でさわっちゃダメ！足を使ってプレーしよう。"
},
{
  question: "チームの中で、前にぐいぐい進む力もちの選手のことを「ペネトレイター」という？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【ペネトレイター】前に出る力が強い選手！"
},
{
  question: "スクラムは1人で組む？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【スクラム】3人で組んで、真ん中の人がボールを出すよ"
},
{
  question: "ラックはたおれてボールを取り合う？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【ラック】地面のボールを立ったまま取り合うプレーだよ"
},
{
  question: "モールはボールを持ってたおれてから押し合う？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【モール】ボールを持った人が立ったまま、みんなで押し合うんだ"
},
{
  question: "パスは前に投げてもいい？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【パス】ラグビーでは前に投げると反則！後ろにパスしよう"
},
{
  question: "ノックオンはボールをうしろに落とすこと？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【ノックオン】手から前にボールを落とすと反則になるよ。"
},
{
  question: "ハイタックルはおなかより下をタックルすること？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【ハイタックル】むねより上にタックルすると危ないから反則。"
},
{
  question: "オフサイドはボールよりうしろにいること？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【オフサイド】ボールより前にいると反則になるんだ"
},
{
  question: "ノットロールアウェイはタックル後にすぐどけばいい？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【ノットロールアウェイ】タックルしたらすぐにどかないと反則になるよ"
},
{
  question: "ラインアウトはジャンプしてキャッチしていい？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【ラインアウト】中学年はジャンプしてボールを取っちゃダメだよ"
},
{
  question: "タックルされた後に立ち上がって走ったのはダメ？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【タックル後のプレー】倒れてボールを置いてからなら立ってプレーしていいよ"
},
{
  question: "ボールを持ってない人にもタックルしていい？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【ノーボールタックル】ボールを持ってない人にはタックルしちゃダメ"
},
{
  question: "パイルアップになってもそのままプレーを続ける？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【パイルアップ】ボールが出なかったら、持ち込んだ反対チームのスクラム"
},
{
  question: "モールでボールが出なかったら攻撃側のスクラム？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【モール】ボールが出なければ相手のスクラムになるよ"
},
{
  question: "ローヘッドは頭を高くしてヒットする反則？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【ローヘッド】頭が低すぎると危なくて反則だよ"
},
{
  question: "ハンドオフはグーで相手を押していい？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【ハンドオフ】手のひらで押すのはOK、グーはダメだよ"
},
{
  question: "相手をつかんで振り回して倒していい？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【危険なタックル】つかんだらすぐ倒す！振り回しちゃダメ"
},
{
  question: "逆ヘッドのタックルは安全？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【逆ヘッド】頭が前にあるタックルは危なくて反則だよ"
},
{
  question: "ノックバックは前にボールを落とすこと？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【ノックバック】後ろに落ちたらプレー続けていいよ"
},
{
  question: "タップキックはボールを高くけってスタート？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【タップキック】地面に置いて軽くけってスタートするよ"
},
{
  question: "スクイーズボールはOKなプレー？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【スクイーズボール】お腹の下にかくして足から出すと反則になるよ"
},
{
  question: "スワーブはまっすぐ走るプレー？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【スワーブ】カーブして相手をよける走り方だよ"
},
{
  question: "セービングはボールをわたすプレー？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【セービング】地面にあるボールに体を投げ出して取るんだよ"
},
{
  question: "デコイはパスをもらうプレー？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【デコイ】パスをもらうふりをして相手をひきつけるよ"
},
{
  question: "ボールを持った人に2人以上でくっついて走るのは反則？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【フライングウェッジ】ぶつかる前に2人以上でくっついて走るとキケンなので反則"
},
{
  question: "ラッチプレーは敵にくっつくプレー？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【ラッチ】ボールを持った味方にくっついて支えるよ"
},
{
  question: "キックチャージで前に落ちたらノックオン？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【キックチャージ】キックを体や手で止めて前に転がってもノックオンじゃないよ"
},
{
  question: "キャリーバックで自分達のゴールにおいたらマイボールスクラム？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【キャリーバック】自分たちのゴールにおいたら相手ボールスクラム"
},
{
  question: "スローフォワードはマイボールスクラムになる？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【スローフォワード】前に投げたら相手のスクラムになるよ"
},
{
  question: "ノックオンは自分たちのペナルティ？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【ノックオン】相手のスクラムになるけどペナルティではないよ"
},
{
  question: "タップキックはボールの上に足をおいたらスタート？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【タップキック】ボールを地面に置き、好きな方向にボールをちょんとけって進めること"
},
{
  question: "ノックオンをした。「アドバンテージ」と言われてプレーが続いた。あってる？",
  choices: ["○", "×"],
  answer: 0,
  explanation: "【アドバンテージ】反則があっても有利ならプレーを続けるよ"
},
{
  question: "アドバンテージオーバーは不利になった時に言う？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【アドバンテージオーバー】反則があったことよりも「良いこと」が起きたら、終わったことにする"
},
{
  question: "ノミネートは味方を選ぶこと？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【ノミネート】守る相手をあらかじめ決めることだよ"
},
{
  question: "ピラーはラックやモールの真ん中に立つこと？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【ピラー】ラックやモールの横に立って守る人だよ"
},
{
  question: "順目は一つ前の攻撃の流れと逆の方向？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【順目】攻撃の流れと同じ方向だよ"
},
{
  question: "チャンネルは守る場所のこと？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【チャンネル】攻める場所や通る道のことだよ"
},
{
  question: "トイメンはとなりにいる味方？",
  choices: ["○", "×"],
  answer: 1,
  explanation: "【トイメン】向かい合っている相手のことだよ"
}
];




// ❶ まず先に使う変数は宣言しておく
const totalQuestions = 20;
let current = 0;
let score = 0;
let remainingSeconds = 300;
let sessionHighScore = 0; // ←★ ここに追加！
let wrongAnswers = [];

// ❷ クイズデータからランダムに20問抽出
let selectedQuiz = shuffleArray([...quiz]).slice(0, totalQuestions);

// ❸ DOM 要素の取得
const app = document.getElementById("app");
const questionCount = document.getElementById("question-count");
const thanksMessage = document.getElementById("thanks-message");
const countdownTimer = document.getElementById("countdown-timer");

// ❹ 配列をシャッフルする関数
function shuffleArray(array) {
  const copied = [...array];
  for (let i = copied.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }
  return copied;
}

function startTimer() {
  timer = setTimeout(showResult, 1000 * remainingSeconds);
}

function startCountdown() {
  countdownTimer.textContent = `残り時間：${formatTime(remainingSeconds)}`;
  countdownTimer.style.color = "red";

  countdownTimerInterval = setInterval(() => {
    remainingSeconds--;
    countdownTimer.textContent = `残り時間：${formatTime(remainingSeconds)}`;
    if (remainingSeconds <= 0) {
      clearInterval(countdownTimerInterval);
    }
  }, 1000);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${minutes}:${sec.toString().padStart(2, "0")}`;
}

function showQuestion() {
  const q = selectedQuiz[current];
  if (!q) {
    app.innerHTML = "<p>問題の読み込みに失敗しました。</p>";
    return;
  }

  questionCount.innerText = `Q${current + 1} / ${totalQuestions}`;
  questionCount.style.display = "block";

  app.innerHTML = `
    <h2>${q.question}</h2>
    ${q.choices.map((c, i) => `<button onclick="checkAnswer(${i})">${c}</button>`).join("<br>")}
  `;
}

function checkAnswer(choice) {
  const q = selectedQuiz[current];
  const isCorrect = (choice === q.answer);
  const resultClass = isCorrect ? "correct" : "incorrect";
  const resultImage = isCorrect ? "〇" : "×";
  const resultText = isCorrect ? "正解！" : "ざんねん…";

  if (isCorrect) {
    score++;
  } else {
    wrongAnswers.push({
      question: q.question,
      correctAnswer: q.answer,
      selectedAnswer: choice,
      explanation: q.explanation
    });
  }

  // ✅ 正解・不正解の表示と次の問題ボタン
  app.innerHTML = `
    <div class="result ${resultClass}">
      <h2>${resultImage} ${resultText}</h2>
      <p>${q.explanation}</p>
      <button onclick="reviewQuestion()">問題文をもう一度見る</button>
      <button onclick="nextQuestion()">次の問題へ</button>
    </div>
  `;
}

// ✅ checkAnswer の外に定義する！この位置に注意
function reviewQuestion() {
  const q = selectedQuiz[current];
  if (!q) {
    app.innerHTML = "<p>この問題は表示できません。</p>";
    return;
  }

  app.innerHTML = `
    <h2>${q.question}</h2>
    <p style="margin-top: 1em; color: #2c3e50;">※この問題は確認用です</p>
    <br>
    <button onclick="nextQuestion()">次の問題へ</button>
  `;
}

// ✅ これは reviewQuestion の外に置く！
function nextQuestion() {
  current++;
  if (current < totalQuestions && current < selectedQuiz.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  // 🔽 スコア管理（localStorage に保存）
  const lastScore = localStorage.getItem("lastScore") || 0; // ← ✅ 修正！
  const highScore = localStorage.getItem("highScore") || 0;

  if (score > highScore) {
    localStorage.setItem("highScore", score);
  }
  localStorage.setItem("lastScore", score); // ← ✅ これはそのままでOK


  // 🔽 UI更新
  countdownTimer.style.display = "none";
  questionCount.style.display = "none";
  thanksMessage.style.display = "block";

  app.innerHTML = `
    <h2>けっかはっぴょう！</h2>
    <div style="margin-top: 80px;">
      <p>今回のスコア：${score}問</p>
 　　　<p>前回のスコア：${lastScore}問</p>
      <button onclick="restart()">もういちどチャレンジ！</button>
      <div style="margin-top: 1em;">
        </div>
    </div>
  `;

  // 🔽 まちがえた問題の一覧
  if (score < totalQuestions && wrongAnswers.length > 0) {
    let wrongList = "<h3>まちがえた問題と正解</h3><ul style='list-style-type: none; padding-left: 0;'>";

    wrongAnswers.forEach((q) => {
      const correctMark = q.correctAnswer === 0 ? "〇" : "×";
      wrongList += `
        <li style="margin-bottom: 1.2em;">
          ${q.question}
          <br><span style="display: inline-block; margin-top: 0.3em;">正解：${correctMark}</span>
        </li>`;
    });

    wrongList += "</ul>";
    app.innerHTML += wrongList;
  }
}


function restart() {
  current = 0;
  score = 0;
  remainingSeconds = 300;
  wrongAnswers = [];
  selectedQuiz = shuffleArray([...quiz]).slice(0, totalQuestions);

  clearInterval(countdownTimerInterval);
  countdownTimer.style.display = "block";

  startCountdown();
  startTimer();

  thanksMessage.style.display = "none";
  questionCount.style.display = "block";

  showQuestion();
} // ✅ restart 関数はここで正しく閉じる

// ✅ これは関数の外なのでOK
window.onload = () => {
  selectedQuiz = shuffleArray([...quiz]).slice(0, totalQuestions);
  startCountdown();
  startTimer();
  showQuestion();
};

// ゲーム開始時のセットアップ
window.onload = () => {
  selectedQuiz = shuffleArray([...quiz]).slice(0, totalQuestions);
  startCountdown();
  startTimer();
  showQuestion();
};
