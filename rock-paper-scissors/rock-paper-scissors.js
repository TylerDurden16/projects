
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
        return 'You lose! Paper beats Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats Scissors';
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return'Tie!';
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
        return 'Computer error.';
    }
}

let playerSelection = '';    

//Plays rock, paper, scissors 5 times and determines winner. If there's a tie, sudden death
function game() {
    let playerScore = 0;                               //Player score  
    let computerScore = 0;                             //Computer score
    const div = document.createElement('div');         //Results held in div
    div.setAttribute('id', 'results');
    let playScore = document.createElement('h2');      
    let comScore = document.createElement('h2');       
    const finalScore = document.createElement('h1');   //Final score after 5 games holder
    finalScore.setAttribute('id', 'finalScore');

//Plays game 5 times, adds results to div
  for (let i = 0; i < 5; i++) {
      const fiveGamesPlayed = playRound(playerSelection, computerPlay());

      if (fiveGamesPlayed.includes('You win')){
        playerScore++;  
      } else if (fiveGamesPlayed.includes('You lose')) {
          computerScore++;
      } else if (fiveGamesPlayed.includes('Tie!')) {
          computerScore++;
          playerScore++;
      }
       else {
          console.log('Computer error.');
      }

      const h3 = document.createElement('h3');       //Round results holder
      h3.textContent = fiveGamesPlayed;
      div.appendChild(h3);
  }

  playScore.textContent = `Player Score: ${playerScore}`;        //Score tallied up
  comScore.textContent = `Computer Score: ${computerScore}`;

  //Determines winner after 5 games
  if (playerScore > computerScore) {
    finalScore.textContent ='You win!';
    div.appendChild(finalScore);
    div.appendChild(playScore);
    div.appendChild(comScore);
} else if (playerScore < computerScore) {
    finalScore.textContent ='You lose!';
    div.appendChild(finalScore);
    div.appendChild(playScore);
    div.appendChild(comScore);
}else if (playerScore === 3 && computerScore === 3 || playerScore === 4 &&  //For tie game, for loop plays game until 
     computerScore === 4 || playerScore === 5 && computerScore === 5){      //there's a winner
    
    finalScore.textContent = 'Tie game! Sudden death match!';
    div.appendChild(finalScore);
    for(let j = 0;; j++){
    playRound(playerSelection, computerPlay());
    const finalRound = playRound(playerSelection, computerPlay());
    const finalRoundh2 = document.createElement('h2');
    finalRoundh2.setAttribute('id', 'finalRound');   
    if (finalRound.includes('You win')){
        playerScore++;
      finalRoundh2.textContent = finalRound;
      div.appendChild(finalRoundh2);
      break;
    } else if (finalRound.includes('You lose')) {
        computerScore++;
      finalRoundh2.textContent = finalRound;
      div.appendChild(finalRoundh2);
      break;
    } else if (finalRound.includes('Tie!')){
        computerScore++;
        playerScore++;
    }
     else {
        console.log('Computer error.');
    } 
  }
  playScore.textContent = `Player Score: ${playerScore}`;
  comScore.textContent = `Computer Score: ${computerScore}`;
    }
 else {
    console.log('Computer error');
 }
   
   div.appendChild(playScore);              //Scores added to div
   div.appendChild(comScore);
   document.body.appendChild(div);          //div added to html
  }


const playerButtons = document.querySelectorAll('button');
//Determines player's selection based on button clicked
function removeDiv(e) {
    const div = document.getElementById('results');
    document.body.removeChild(div); 
}

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
    } playerButtons.forEach(button => button.addEventListener('click', removeDiv));
}

playerButtons.forEach(button => button.addEventListener('click', determinePlaySel));
