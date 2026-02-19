let currentAudio = null;
let currentBar = null;

function play(id, button) {
  const audio = document.getElementById(id);
  const bar = button.querySelector('.progress');

  if (currentAudio && currentAudio !== audio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;

    if (currentBar) {
      currentBar.style.width = '0%';
    }
  }

  currentAudio = audio;
  currentBar = bar;

  audio.currentTime = 0;
  audio.play();
  bar.style.transition = 'width 0.05s linear';

  function update() {
    if (!audio.duration) {
      requestAnimationFrame(update);
      return;
    }

    const percent = (audio.currentTime / audio.duration) * 100;
    bar.style.width = percent + '%';

    if (percent >= 100 || audio.ended) {
      bar.style.width = '0%';
      audio.pause();
      audio.currentTime = 0;

      currentAudio = null;
      currentBar = null;
      return;
    }

    requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}
