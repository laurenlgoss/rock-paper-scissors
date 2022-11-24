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
        message: `${rock}, ${paper}, or ${scissors}?`,
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

function calcWinOrLose(userChoice, { choice, winsTo }) {
  if (choice === userChoice) {
    console.log('You tied!');
  } else if (winsTo === userChoice) {
    console.log('You lost!');
  } else {
    console.log('You won!');
  }
}

init();
