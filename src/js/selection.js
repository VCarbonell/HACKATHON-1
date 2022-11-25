const playerSelection = document.querySelector('.playerSelection');
const allPlayer = document.querySelectorAll('.player');
const selectBtn = document.querySelector('.selectBtn');
const selectedPlayerDisplay = document.querySelector('.selectedPlayer');
const playBtn = document.querySelector('.playBtn');
const buttonSound = document.querySelector('.buttonClickSound');

let selectedPlayer;

allPlayer.forEach(player => {
  player.addEventListener('click', () => {
    buttonSound.play();
    allPlayer.forEach(player => {
      player.classList.remove("isSelected");
    })
    player.classList.add("isSelected");
    selectedPlayer = player.alt;
  });
});

selectBtn.addEventListener('click', () => {
  buttonSound.play();
  if (selectedPlayer) {
    selectedPlayerDisplay.innerHTML = selectedPlayer;
    playerSelection.style.display = "none";
    playBtn.style.display = "block";
  };
});