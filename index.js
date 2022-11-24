import inquirer from 'inquirer';

const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
const choices = [
  {
    choice: rock,
    winsTo: scissors,
  },
  {
    choice: paper,
    winsTo: rock,
  },
  {
    choice: scissors,
    winsTo: paper,
  },
];

function init() {
  gameStart();
}

function gameStart() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Rock, paper, or scissors?',
        choices: choices.map((elem) => elem.choice),
        name: 'choice',
      },
    ])
    .then((response) => {
      const computerChoice = getComputerChoice(choices);
      console.log(`Computer chose ${computerChoice.choice}`);

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
  if (userChoice === computerChoice.choice) {
    console.log('Tie!');
    return;
  }

  if (computerChoice.winsTo === userChoice) {
    userLoses();
  } else {
    userWins();
  }
}

function userWins() {
  console.log('You won!');
}

function userLoses() {
  console.log('You lost!');
}

init();
