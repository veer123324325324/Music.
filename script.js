
menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  content.classList.toggle("shift");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navMenu.classList.remove("show");
    content.classList.remove("shift");
  }
});

menuButton.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
playButton.addEventListener("click", () => {
  audioPlayer.play();
  songTitle.innerText = "Now Playing: Song Name";
});

pauseButton.addEventListener("click", () => {
  audioPlayer.pause();
  songTitle.innerText = "Paused";
});
