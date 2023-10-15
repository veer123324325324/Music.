// Get references to the HTML elements
const audioPlayer = document.getElementById("audio-player");
const playPauseButton = document.getElementById("play-pause-button");
const stopButton = document.getElementById("stop-button");
const muteButton = document.getElementById("mute-button");
const volumeSlider = document.getElementById("volume-slider");
const playlist = document.getElementById("playlist-list");

// Event listener for the play/pause button
playPauseButton.addEventListener("click", function () {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.textContent = "Pause";
  } else {
    audioPlayer.pause();
    playPauseButton.textContent = "Play";
  }
});

// Event listener for the stop button
stopButton.addEventListener("click", function () {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  playPauseButton.textContent = "Play";
});

// Event listener for the mute button
muteButton.addEventListener("click", function () {
  if (audioPlayer.muted) {
    audioPlayer.muted = false;
    muteButton.textContent = "Mute";
  } else {
    audioPlayer.muted = true;
    muteButton.textContent = "Unmute";
  }
});

// Event listener for the volume slider
volumeSlider.addEventListener("input", function () {
  audioPlayer.volume = volumeSlider.value;
});

// Event listener for the playlist
playlist.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    event.preventDefault();
    audioPlayer.src = event.target.getAttribute("href");
    audioPlayer.load();
    audioPlayer.play();
    playPauseButton.textContent = "Pause";
  }
});
