// array
var musicList = [
  "/mfgg/(01) [野見祐二] 日常のタイトル曲.flac",
  "/mfgg/(02) [野見祐二] のんびり生活.flac",
  "/mfgg/(06) [野見祐二] 調子づくゆっこ.flac",
  "/mfgg/(04) [野見祐二] 復活のゆっこ.flac",
  "/mfgg/(03) [野見祐二] 大きすぎるショック.flac",
  "/mfgg/(05) [野見祐二] お涙頂戴.flac",
  "/mfgg/(07) [野見祐二] これはオチです.flac",
  "/mfgg/(12) [野見祐二] 日常の作戦開始.flac",
  "/mfgg/(08) [野見祐二] 東雲研究所の毎日.flac",
  "/mfgg/(09) [野見祐二] のんびりと回想してみる.flac",
  "/mfgg/(10) [野見祐二] コミカルに説教.flac",
  "/mfgg/(11) [野見祐二] 寂しくて少し切ない時.flac",
  "/mfgg/(16) [野見祐二] 日常の登校.flac",
  "/mfgg/(14) [野見祐二] 日常の牧歌的音楽.flac",
  "/mfgg/(13) [野見祐二] ハッピー東雲研究所.flac",
  "/mfgg/(18) [野見祐二] 中之条のテーマ.flac",
  "/mfgg/(17) [野見祐二] 機嫌の良いはかせ.flac",
  "/mfgg/(15) [野見祐二] 日常の優雅さ.flac",
  "/mfgg/(21) [野見祐二] 日常のじゃんけんコーナー.flac",
  "/mfgg/(22) [野見祐二] 日常の予告.flac",
  "/mfgg/(20) [野見祐二] 囲碁サッカー部の日常.flac",
  "/mfgg/(19) [野見祐二] 可愛らしいドキドキ感.flac",
  "/mfgg/(23) [野見祐二] 阪本いぢり.flac",
  "/mfgg/(24) [野見祐二] 笹原のテーマ.flac",
  "/mfgg/(27) [野見祐二] ヒトコトワドコトバ.flac",
  "/mfgg/(25) [野見祐二] ヘルベチカスタンダード～その１～.flac",
  "/mfgg/(28) [野見祐二] 東雲研究所の楽しい喧嘩.flac",
  "/mfgg/(30) [野見祐二] 狐と狸のおマヌケな化かし合い.flac",
  "/mfgg/(26) [野見祐二] 可愛く走る走る走る.flac",
  "/mfgg/(29) [野見祐二] パニックでトラブルでオーマイガー.flac",
  "/mfgg/(36) [野見祐二] ヘルベチカスタンダード～その3～.flac",
  "/mfgg/(32) [野見祐二] ヘルベチカスタンダード～その2～.flac",
  "/mfgg/(31) [野見祐二] 恋心は弾丸も柔らかくする.flac",
  "/mfgg/(34) [野見祐二] 駄々をこねる天才.flac",
  "/mfgg/(35) [野見祐二] ここが落とし所.flac",
  "/mfgg/(33) [野見祐二] マヌケの全力疾走.flac",
  "/mfgg/(41) [野見祐二] まあまあのキセキ.flac",
  "/mfgg/(38) [野見祐二] 不安少女.flac",
  "/mfgg/(42) [野見祐二] 大げさなドキドキ.flac",
  "/mfgg/(39) [野見祐二] 暖かく平和な時間.flac",
  "/mfgg/(37) [野見祐二] 春な日常.flac",
  "/mfgg/(40) [野見祐二] 夏っぽい高校.flac",
  "/mfgg/(45) [野見祐二] 素晴らしくカッコイイ.flac",
  "/mfgg/(44) [野見祐二] 力強くてカッコいいなぁ.flac",
  "/mfgg/(48) [野見祐二] 教室での会話っぽい日常.flac",
  "/mfgg/(43) [野見祐二] ミステリアスで不思議な女.flac",
  "/mfgg/(46) [野見祐二] 女子女子友情.flac",
  "/mfgg/(47) [野見祐二] シリアスでドキドキ.flac",
  "/mfgg/(53) [野見祐二] 愉快な恋心.flac",
  "/mfgg/(52) [野見祐二] 暖かな会話.flac",
  "/mfgg/(54) [野見祐二] 可愛らしい悩み心.flac",
  "/mfgg/(50) [野見祐二] 恋心はひねくれさん.flac",
  "/mfgg/(49) [野見祐二] ポエムofゆっこ.flac",
  "/mfgg/(51) [野見祐二] 日常世界のシリアス代表.flac",
  "/mfgg/(60) [野見祐二] ラブ的 ～学生・青春～.flac",
  "/mfgg/(58) [野見祐二] 恐ろしい危機と能力解放.flac",
  "/mfgg/(55) [野見祐二] 駆け抜ける熱情.flac",
  "/mfgg/(57) [野見祐二] 少女の怯え.flac",
  "/mfgg/(56) [野見祐二] 喜びと幸せと.flac",
  "/mfgg/(59) [野見祐二] 暖かなる女子の友情.flac",
  "/mfgg/(63) [野見祐二] ブラックヘルベチカ ～序章～.flac",
  "/mfgg/(65) [野見祐二] ラブ的 ～子供～.flac",
  "/mfgg/(64) [野見祐二] ブラックヘルベチカ ～本編～.flac",
  "/mfgg/(62) [野見祐二] 動物は奇想天外.flac",
  "/mfgg/(66) [野見祐二] 囲碁サッカー部 ～新入部員～.flac",
  "/mfgg/(61) [野見祐二] This is House of cards ～トランプタワー～.flac",
  "/mfgg/(69) [野見祐二] ダンス ～その1～.flac",
  "/mfgg/(70) [野見祐二] ダンス ～その2～.flac",
  "/mfgg/(71) [野見祐二] ダンス ～その3～.flac",
  "/mfgg/(67) [野見祐二] 囲碁サッカー部 ～顧問誕生～.flac",
  "/mfgg/(68) [野見祐二] 囲碁サッカー部 ～野良試合～.flac",
  "/mfgg/(72) [野見祐二] 冬っぽい高校.flac",
  "/mfgg/(76) [野見祐二] 相対する者たち.flac",
  "/mfgg/(78) [野見祐二] ラブ的 ～日常の中に～.flac",
  "/mfgg/(77) [野見祐二] 秋っぽい高校.flac",
  "/mfgg/(73) [野見祐二] ウキウキハッピネス.flac",
  "/mfgg/(75) [野見祐二] 科学者の脳みそ.flac",
  "/mfgg/(74) [野見祐二] 渋さゆえのドラマ.flac",
  "/mfgg/(79) [野見祐二] 機械人形ですね.flac",
  "/mfgg/(83) [野見祐二] フェイ王国 ～ボヤキ兵士～.flac",
  "/mfgg/(80) [野見祐二] ひどい誤解から来るショッキング.flac",
  "/mfgg/(82) [野見祐二] フェイ王国 ～混乱する兵士たち～.flac",
  "/mfgg/(84) [野見祐二] フェイ王国 ～戦い～.flac",
  "/mfgg/(81) [野見祐二] フェイ王国 ～ドルフの野望～.flac",
  "/mfgg/(89) [野見祐二] 悟りの境地.flac",
  "/mfgg/(88) [野見祐二] 教頭のテーマ.flac",
  "/mfgg/(86) [野見祐二] フェイ王国 ～傍若無人～.flac",
  "/mfgg/(90) [野見祐二] 走馬灯のごとく.flac",
  "/mfgg/(87) [野見祐二] フェイ王国 ～最後の聖戦～.flac",
  "/mfgg/(85) [野見祐二] フェイ王国 ～支配～.flac",
  "/mfgg/(94) [野見祐二] かっこいいもの ～ソフトかっこいい～.flac",
  "/mfgg/(95) [野見祐二] かっこいいもの ～重たいかっこいい～.flac",
  "/mfgg/(93) [野見祐二] 大人のテイクその5.flac",
  "/mfgg/(96) [野見祐二] 3人はまるで家族.flac",
  "/mfgg/(91) [野見祐二] 想像力全開.flac",
  "/mfgg/(92) [野見祐二] 全力の果てに.flac",
  "/mfgg/(99) [野見祐二] ヘルベチカスタンダード.flac",
  "/mfgg/(98) [野見祐二] 日常っぽいクリスマス.flac",
  "/mfgg/(97) [野見祐二] 優雅なる時間からの始まり.flac"
];

// random func
function playRandomMusic() {
  // random index from file array
  var randomIndex = Math.floor(Math.random() * musicList.length);

  //url of randomly chosen song
  var musicURL = musicList[randomIndex];

  var modifiedFileName = musicURL
    .replace(".flac", "")
    .replace("/mfgg/", " - ");

  // make html audio element
  var audio = new Audio(musicURL);

  // ptag file name
  var fileNameTag = document.getElementById('currentSong');
  fileNameTag.textContent = "song " + modifiedFileName;

  // musisc play
  audio.play();

//event listener
  audio.addEventListener('ended', function() {
    // wait 10 seconds to play different music
    setTimeout(function() {
      playRandomMusic();
    }, 10000);
  });
}

playRandomMusic();