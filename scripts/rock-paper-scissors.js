let randomNumber = Math.random();
console.log(randomNumber);

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function pickComputerMove() {
  let compMove;

  if (randomNumber < 1 / 3 ) {
    compMove = 'Rock';
  } else if ( randomNumber < 2 / 3) {
    compMove = 'Paper';
  } else {
    compMove = 'Scissors';
  }

  console.log(`Computer move: ${compMove}`);

  return compMove;
}

// Buttons using event listeners
const rockButton = document.querySelector('.js-rock-button');
rockButton.addEventListener('click', () => {
  playGame('Rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('Paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('Scissors');
});


// Use keyboard to play game
document.body.addEventListener('keydown', (event) => {
  console.log(event.key);
  if (event.key === 'r') {
    playGame('Rock');

  } else if (event.key === 'p') {
    playGame('Paper');

  } else if (event.key === 's') {
    playGame('Scissors');
  }
});

function playGame(playerMove) {
  let result;
  const computerMove = pickComputerMove();

  if (computerMove === playerMove) {
    result = 'Tie.';
    
  } else if (computerMove === 'Rock' ) {
    if (playerMove === 'Scissors') {
      result = 'You lose.';
    } else if (playerMove === 'Paper') {
      result = 'You win.';
    }
  } else if (computerMove === 'Paper') {
    if (playerMove === 'Scissors') {
      result = 'You win.';
    } else if (playerMove === 'Rock') {
      result = 'You lose.';
    }
  } else if (computerMove === 'Scissors') {
    if (playerMove === 'Rock') {
      result = 'You win.';
    } else if (playerMove === 'Paper') {
      result = 'You lose.';
    }
  }

  console.log(result);

  if (result === 'Tie.') {
    score.ties += 1;

  } else if (result === 'You win.') {
    score.wins += 1;
    
  } else if (result === 'You lose.') {
    score.losses += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-moves')
    .innerHTML = `You <img src="images/${playerMove}-emoji.png" class= "move-icon">  vs <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;

  document.querySelector('.js-results').innerHTML = `${result}`;

  updateScoreElement();

  // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} \nWins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`);
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`;

  console.log(score);
}

function resetScore() {
  localStorage.removeItem('score');
  document.querySelector('.js-score')
    .innerHTML = `Wins: 0. Losses: 0. Ties: 0`;
}
