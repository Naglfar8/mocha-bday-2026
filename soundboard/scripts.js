function play(id, button) {
  const audio = document.getElementById(id); // Get audio file by id
  const bar = button.querySelector('.progress'); // Scrolling bar to display audio playback progress

  audio.currentTime = 0;
  audio.play(); // Play audio file
  bar.style.transition = 'width 0.05s linear';

  function update() { // Updates bar width
    if (!audio.duration) {
      requestAnimationFrame(update);
      return;
    }

    const percent = (audio.currentTime / audio.duration) * 100;
    bar.style.width = percent + '%'; // Width

    if (percent >= 100 || audio.ended) { // Reset audio bar
      bar.style.width = '0%';
      audio.pause();
      audio.currentTime = 0;
      return;
    }

    requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}
