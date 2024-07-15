import sound from "../assets/walk.mp3";

const audio = new Audio(sound);

function playAudio() {
  //audioPlayer.play();
  audio.play();
}
function pauseAudio() {
  //audioPlayer.pause();
  audio.pause();
}

export { playAudio, pauseAudio };
