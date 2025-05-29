function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissor'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').textContent = `Your Choice: ${userChoice}`;
  document.getElementById('computer-choice').textContent = `Computer Choice: ${computerChoice}`;

  let result = '';
  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissor') ||
    (userChoice === 'scissor' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  document.getElementById('outcome').textContent = `Result: ${result}`;
}
