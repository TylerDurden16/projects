PROGRAM RockPaperScissors

function computerPlay()
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

function playRound()
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
Declare winner
IF (There is a tie) THEN
Play sudden death match
Declare winner
END
END

