/*PROGRAM RockPaperScissors

function computerPlay
randomly generates 0-2
IF(number is 0) THEN
answer is rock
ELSE IF(answer is 1) THEN
answer is paper
ELSE
answer is scissors
END
return answer
END

function playRound
takes in playerSelection and computerSelection
IF (playerSelection is rock and computerSelection is paper) THEN
answer is 'You lose!'
ELSE IF (playerSelection is rock and computerSelection is scissors) THEN
answer is 'You win!'
ELSE IF (playerSelection is rock and computerSelection is rock) THEN
answer is 'Tie!';
ELSE IF (playerSelection is paper and computerSelection is scissors) THEN
answer is 'You Lose!'
ELSE IF (playerSelection is paper and computerSelection is rock) THEN
answer is 'You win!'
ELSE IF (playerSelection is paper and computerSelection is paper) THEN
answer is 'Tie!'
ELSE IF (playerSelection is scissors and computerSelection is paper) THEN
answer is 'You win!'
ELSE IF (playerSelection is scissors and computerSelection is rock) THEN
answer is 'You lose!'
ELSE IF (playerSelection is scissors and computerSelection is scissors) THEN
answer is 'Tie!'
ELSE
answer is 'Computer error!'
END
return string declaring winner
END

function game()
playRound() called 5 times
WHILE(winner is not decided) DO
playRound()
Record score
END
Declare winner*/

function computerPlay() {
    let computerChoice = '';
    const randNum = Math.floor(Math.random() * 3);
    if(randNum === 0) {
        return 'rock';
    } else if (randNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    } 
}
function playRound(playerSelection, computerSelection) {
playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats Scissors';
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Tie!';
    } 
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beats Paper';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Tie!';
    }
     else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats Scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Tie!';
    } else {
        return 'Computer error';
    }
}
const playerSelection = 'PAPER';

function game() {
    let playerScore = 0;
    let computerScore = 0;

  for (let i = 0; i < 5; i++){
      playRound(playerSelection, computerPlay());
      const results = playRound(playerSelection, computerPlay());
     if (results.startsWith('You win')){
        playerScore++;  
      } else if (results.startsWith('You lose')) {
          computerScore++;
      } else if (results.includes('Tie!')) {
          computerScore++;
          playerScore++;
      }
       else {
          console.log('Computer error');
      }
      console.log(results);
  }
  console.log(`playerScore: ${playerScore}`);
  console.log(` compScore: ${computerScore}`);
 if (playerScore > computerScore) {
      console.log('You win!');
  } else if (playerScore < computerScore) {
      console.log('You lose!');
  } else if (playerScore === 3 && computerScore === 3 || playerScore === 4 && computerScore === 4 || playerScore === 5 && computerScore === 5){
      console.log('Tie! Sudden death');
      for(let j = 0;; j++){
      playRound(playerSelection, computerPlay());
      const finalResult = playRound(playerSelection, computerPlay());
      if (finalResult.startsWith('You win')){
          playerScore++;
        console.log(finalResult);
        break;
      } else if (finalResult.startsWith('You lose')) {
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
      console.log('Computer error');
  }
}
game();