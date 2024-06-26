const currentYear = new Date().getFullYear();

const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}.`;

const crashSoundBtn = document.getElementById('crash');
const kickSoundBtn = document.getElementById('kick');
const snareSoundBtn = document.getElementById('snare');
const tomSoundBtn = document.getElementById('tom');

const crashSound = document.getElementById('crash-sound');
const kickSound = document.getElementById('kick-sound');
const snareSound = document.getElementById('snare-sound');
const tomSound = document.getElementById('tom-sound');

function playCrashSound() {
  if (crashSound.paused) {
    crashSound.play();
  } else {
    crashSound.currentTime = 0;
  }
}

function playKickSound() {
  if (kickSound.paused) {
    kickSound.play();
  } else {
    kickSound.currentTime = 0;
  }
}

function playSnareSound() {
  if (snareSound.paused) {
    snareSound.play();
  } else {
    snareSound.currentTime = 0;
  }
}

function playTomSound() {
  if (tomSound.paused) {
    tomSound.play();
  } else {
    tomSound.currentTime = 0;
  }
}

crashSoundBtn.addEventListener('click', playCrashSound);
kickSoundBtn.addEventListener('click', playKickSound);
snareSoundBtn.addEventListener('click', playSnareSound);
tomSoundBtn.addEventListener('click', playTomSound);

window.addEventListener('keydown', (e) => {
  if (e.key === 'a') {
    playCrashSound();
    crashSoundBtn.classList.add('active');

    setTimeout(() => {
      crashSoundBtn.classList.remove('active');
    }, 100);
  }

  if (e.key === 's') {
    playKickSound();
    kickSoundBtn.classList.add('active');

    setTimeout(() => {
      kickSoundBtn.classList.remove('active');
    }, 100);
  }

  if (e.key === 'k') {
    playSnareSound();
    snareSoundBtn.classList.add('active');

    setTimeout(() => {
      snareSoundBtn.classList.remove('active');
    }, 100);
  }

  if (e.key === 'l') {
    playTomSound();
    tomSoundBtn.classList.add('active');

    setTimeout(() => {
      tomSoundBtn.classList.remove('active');
    }, 100);
  }
});
