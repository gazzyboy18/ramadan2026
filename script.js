// Try to autoplay (may be blocked by some browsers)
window.addEventListener("load", function () {
  const audio = document.getElementById("ramadan-audio");
  if (audio) {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked; user will press play
      });
    }
  }
});
