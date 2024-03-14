// array
var musicList = [
  "01 - The Fire Is Gone.mp3",
  "01 - The Spinal Staircase.mp3",
  "01 - [Insert Disc 2].mp3",
  "02 - CHAOS.mp3",
  "02 - Dune Eternal.mp3",
  "02 - Into The Fire.mp3",
  "03 - ORDER.mp3",
  "03 - Sands Of Tide.mp3",
  "03 - Unstoppable Force.mp3",
  "04 - Cerberus.mp3",
  "04 - Dancer In The Darkness.mp3",
  "04 - Sunshine (Mirage).mp3",
  "05 - A Thousand Greetings.mp3",
  "05 - Duel (Versus Reprise).mp3",
  "06 - A Shattered Illusion.mp3",
  "07 - A Complete And Utter Destruction Of The Senses.mp3",
  "07 - He Is The Light In My Darkness.mp3",
  "08 - Death Odyssey.mp3",
  "08 - Sanctuary In The Garden Of The Mind.mp3",
  "09 - Castle Vein.mp3",
  "09 - Death Odyssey Aftermath.mp3",
  "10 - Debussy: Clair De Lune.mp3",
  "10 - The Abyss And The Serpent.mp3",
  "11 - Chord Of The Crooked Saints.mp3",
  "11 - Versus.mp3",
  "12 - Altars Of Apostasy.mp3",
  "12 - Cold Winds.mp3",
  "13 - Fallen Angel (An Adaptation Of Bach Bwv 639).mp3",
  "13 - Requiem.mp3",
  "14 - Panic Betrayer.mp3",
  "14 - The Death Of God's Will.mp3",
  "15 - In The Presence Of A King.mp3",
  "15 - Silence. Introspection..mp3",
  "16 - Beethoven - 7th Symphony, 2nd Movement.mp3",
  "16 - Guts.mp3",
  "17 - Glory.mp3",
  "18 - Bach: BWV 639.mp3",
  "19 - Divine Intervention.mp3",
  "20 - Disgrace. Humiliation.mp3",
  "21 - Take Care.mp3",
  "22 - Meganeko - The Cyber Grind.mp3",
  "Deep Blue (Calm Loop).mp3",
  "Deep Blue (Combat Loop).mp3",
  "Deep Blue.mp3"
];

// random func
function playRandomMusic() {
  // random index from file array
  var randomIndex = Math.floor(Math.random() * musicList.length);

  //url of randomly chosen song
  var musicURL = musicList[randomIndex];

  var modifiedFileName = musicURL
    .replace(".mp3", "")
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
