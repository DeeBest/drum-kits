const currentYear = new Date().getFullYear();

const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}.`;

const crashSoundBtn = document.getElementById('crash');
const kickSoundBtn = document.getElementById('kick');
const snareSoundBtn = document.getElementById('snare');
const tomSoundBtn = document.getElementById('tom');

crashSoundBtn.addEventListener('click', () => {
  console.log('Sound Button Clicked');
});

kickSoundBtnSoundBtn.addEventListener('click', () => {
  console.log('Sound Button Clicked');
});

snareSoundBtn.addEventListener('click', () => {
  console.log('Sound Button Clicked');
});

tomSoundBtnSoundBtn.addEventListener('click', () => {
  console.log('Sound Button Clicked');
});
