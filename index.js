import inquirer from 'inquirer';

const choices = ['Rock', 'Paper', 'Scissors'];

function init() {
  gameStart();
}

function gameStart() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Rock, paper, or scissors?',
        choices: choices,
        name: 'choice',
      },
    ])
    .then((response) => {
      const computerChoice = getComputerChoice(choices);
      console.log(`Computer chose ${computerChoice}`);

      calcWinOrLose(response.choice, computerChoice);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getComputerChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function calcWinOrLose(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log('Tie!');
    return;
  }

  switch (userChoice) {
    case 'Rock':
      if (computerChoice === 'Paper') {
        userLoses();
      } else if (computerChoice === 'Scissors') {
        userWins();
      }
      break;
    case 'Paper':
      if (computerChoice === 'Rock') {
        userWins();
      } else if (computerChoice === 'Scissors') {
        userLoses();
      }
      break;
    case 'Scissors':
      if (computerChoice === 'Rock') {
        userLoses();
      } else if (computerChoice === 'Paper') {
        userWins();
      }
      break;
  }
}

function userWins() {
  console.log('You won!');
}

function userLoses() {
  console.log('You lost!');
}

init();
