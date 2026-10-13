import backgroundSong from "../assets/audio/bg2.mp3";

const backgroundMusic = new Audio(backgroundSong);

backgroundMusic.loop = true;
backgroundMusic.volume = 1;

function playBackgroundMusic() {
  backgroundMusic.play().catch((error) => {
    console.log("Background music playback blocked:", error);
  });
}

function pauseBackgroundMusic() {
  backgroundMusic.pause();
}

export { playBackgroundMusic, pauseBackgroundMusic };
