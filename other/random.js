// array
var musicList = [
  "music/01 - The Fire Is Gone.mp3",
  "music/01 - The Spinal Staircase.mp3",
  "music/01 - [Insert Disc 2].mp3",
  "music/02 - CHAOS.mp3",
  "music/02 - Dune Eternal.mp3",
  "music/02 - Into The Fire.mp3",
  "music/03 - ORDER.mp3",
  "music/03 - Sands Of Tide.mp3",
  "music/03 - Unstoppable Force.mp3",
  "music/04 - Cerberus.mp3",
  "music/04 - Dancer In The Darkness.mp3",
  "music/04 - Sunshine (Mirage).mp3",
  "music/05 - A Thousand Greetings.mp3",
  "music/05 - Duel (Versus Reprise).mp3",
  "music/06 - A Shattered Illusion.mp3",
  "music/07 - A Complete And Utter Destruction Of The Senses.mp3",
  "music/07 - He Is The Light In My Darkness.mp3",
  "music/08 - Death Odyssey.mp3",
  "music/08 - Sanctuary In The Garden Of The Mind.mp3",
  "music/09 - Castle Vein.mp3",
  "music/09 - Death Odyssey Aftermath.mp3",
  "music/10 - Debussy: Clair De Lune.mp3",
  "music/10 - The Abyss And The Serpent.mp3",
  "music/11 - Chord Of The Crooked Saints.mp3",
  "music/11 - Versus.mp3",
  "music/12 - Altars Of Apostasy.mp3",
  "music/12 - Cold Winds.mp3",
  "music/13 - Fallen Angel (An Adaptation Of Bach Bwv 639).mp3",
  "music/13 - Requiem.mp3",
  "music/14 - Panic Betrayer.mp3",
  "music/14 - The Death Of God's Will.mp3",
  "music/15 - In The Presence Of A King.mp3",
  "music/15 - Silence. Introspection..mp3",
  "music/16 - Beethoven - 7th Symphony, 2nd Movement.mp3",
  "music/16 - Guts.mp3",
  "music/17 - Glory.mp3",
  "music/18 - Bach: BWV 639.mp3",
  "music/19 - Divine Intervention.mp3",
  "music/20 - Disgrace. Humiliation.mp3",
  "music/21 - Take Care.mp3",
  "music/22 - Meganeko - The Cyber Grind.mp3",
  "music/Deep Blue (Calm Loop).mp3",
  "music/Deep Blue (Combat Loop).mp3",
  "music/Deep Blue.mp3"
];

// random func
function playRandomMusic() {
  // random index from file array
  var randomIndex = Math.floor(Math.random() * musicList.length);

  //url of randomly chosen song
  var musicURL = musicList[randomIndex];

  var modifiedFileName = musicURL
    .replace(".mp3", "")
    .replace("music/", "")
  // make html audio element
  var audio = new Audio(musicURL);

  // ptag file name
  var fileNameTag = document.getElementById('currentSong');
  fileNameTag.textContent = "song - " + modifiedFileName;

  // musisc play
  audio.play();

//event listener
  audio.addEventListener('ended', function() {
    // wait 1"0 seconds to play different music
    setTimeout(function() {
      playRandomMusic();
    }, 10000);
  });
}

playRandomMusic();
