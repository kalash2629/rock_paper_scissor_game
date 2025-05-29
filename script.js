document.addEventListener("DOMContentLoaded", function () {
  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");
  const result = document.querySelector("#result");
  const userScoreSpan = document.querySelector("#user-score");
  const compScoreSpan = document.querySelector("#comp-score");

  let userScore = 0;
  let compScore = 0;

  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }

  function playRound(userChoice) {
    const compChoice = getComputerChoice();

    if (userChoice === compChoice) {
      result.textContent = `It's a draw! Both chose ${userChoice}.`;
    } else if (
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "paper" && compChoice === "rock") ||
      (userChoice === "scissors" && compChoice === "paper")
    ) {
      userScore++;
      userScoreSpan.textContent = userScore;
      result.textContent = `You win! ${userChoice} beats ${compChoice}.`;
    } else {
      compScore++;
      compScoreSpan.textContent = compScore;
      result.textContent = `You lose! ${compChoice} beats ${userChoice}.`;
    }
  }

  rock.addEventListener("click", () => playRound("rock"));
  paper.addEventListener("click", () => playRound("paper"));
  scissors.addEventListener("click", () => playRound("scissors"));
});
