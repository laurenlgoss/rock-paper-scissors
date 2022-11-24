import inquirer from 'inquirer';

function init() {
  gameStart();
}

function gameStart() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Rock, paper, or scissors?',
        choices: ['Rock', 'Paper', 'Scissors'],
        name: 'choice',
      },
    ])
    .then((response) => {
      console.log(response.choice);
    });
}

init();
