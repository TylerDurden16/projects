
//Determines computer's choice
function computerPlay() {
    const randNum = Math.floor(Math.random() * 3);
    if(randNum === 0) {
        return 'rock';
    } else if (randNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    } 
}

//Plays 1 rock, paper, scissors game using player and computer input
function playRound(playerSelection, computerSelection) {
playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats Scissors';
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Tie!';
    } 
    if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beats Paper';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Tie!';
    }
    if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats Scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Tie!';
    } else {
        return 'Computer error!';
    }
}
//const playerSelection = prompt('Please enter your choice:');
let playerSelection = ''; 
//Plays 5 games, and determines winner. If there's a tie, sudden death
//match played

function game() {
    let playerScore = 0;
    let computerScore = 0;

  for (let i = 0; i < 5; i++) {
      const results = playRound(playerSelection, computerPlay());
      //console.log(results);
      if (results.includes('You win')){
        playerScore++;  
      } else if (results.includes('You lose')) {
          computerScore++;
      } else if (results.includes('Tie!')) {
          computerScore++;
          playerScore++;
      }
       else {
          console.log('Computer error.');
      }
    console.log(results);
  }
  console.log(`playerScore: ${playerScore}`);
  console.log(`compScore: ${computerScore}`);
  
  if (playerScore > computerScore) {
    console.log('You win!');
} else if (playerScore < computerScore) {
    console.log('You lose!');
} else if (playerScore === 3 && computerScore === 3 || playerScore === 4 &&
     computerScore === 4 || playerScore === 5 && computerScore === 5){
    console.log('Tie! Sudden death match!');
    for(let j = 0;; j++){
    playRound(playerSelection, computerPlay());
    const finalResult = playRound(playerSelection, computerPlay());
   
    if (finalResult.includes('You win')){
        playerScore++;
      console.log(finalResult);
      break;
    } else if (finalResult.includes('You lose')) {
        computerScore++;
      console.log(finalResult);
      break;
    } else if (finalResult.includes('Tie!')){
        computerScore++;
        playerScore++;
    }
     else {
        console.log('Computer error');
    }
  }
  console.log(`playerScore: ${playerScore}`);
  console.log(` compScore: ${computerScore}`);
    }
 else {
    console.log('Computer error@');
 }
  }



const playerButtons = document.querySelectorAll('button');

//Determines player's selection based on button clicked
function determinePlaySel(e) {
    if (this.getAttribute('id') === "rock") {
        playerSelection = "rock";
        game();
    } else if (this.getAttribute('id') === "paper") {
        playerSelection = "paper";
       game();
    } else if (this.getAttribute('id') === "scissors") {
        playerSelection = "scissors";
       game();
    }
}
playerButtons.forEach(button => button.addEventListener('click', determinePlaySel));
