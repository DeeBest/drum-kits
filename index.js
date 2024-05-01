const currentYear = new Date().getFullYear();

const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}.`;

const crashSoundBtn = document.getElementById('crash');
const kickSoundBtn = document.getElementById('kick');
const snareSoundBtn = document.getElementById('snare');
const tomSoundBtn = document.getElementById('tom');

function playCrashSound() {
  console.log('Crash Sound Button Clicked');
}

function playKickSound() {
  console.log('Kick Sound Button Clicked');
}

function playSnareSound() {
  console.log('Snare Sound Button Clicked');
}

function playTomSound() {
  console.log('Tom Sound Button Clicked');
}

crashSoundBtn.addEventListener('click', playCrashSound);

kickSoundBtn.addEventListener('click', playKickSound);

snareSoundBtn.addEventListener('click', playSnareSound);

tomSoundBtn.addEventListener('click', playTomSound);

window.addEventListener('keydown', (e) => {
  if (e.key === 'c') {
    playCrashSound();
  }

  if (e.key === 'k') {
    playKickSound();
  }

  if (e.key === 's') {
    playSnareSound();
  }

  if (e.key === 't') {
    playTomSound();
  }
});
