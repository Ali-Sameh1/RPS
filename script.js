function getComputerChoice (){
    choices = ['rock', 'paper', 'scissors'];
    return (choices[Math.floor(Math.random() * 3)]);
    
}

function getHumanChoice(){
    return (prompt('rock , paper , scissors : ').toLowerCase());
}


let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice , computerChoice){
    if (humanChoice === computerChoice){
        console.log('its a tie!')
    }
    else if (humanChoice === 'rock' && computerChoice ==='scissors'){
        console.log('you win rock beats scissors')
        humanScore += 1 ;
    }
    else if (humanChoice === 'scissors' && computerChoice ==='paper'){
        console.log('you win scissors beats paper')
        humanScore += 1 ;
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock'){
        console.log('you win paper beats rock')
        humanScore += 1 ;
    }
    else {
        console.log('you lose !')
        computerScore += 1 ;
    }
}


function playGame (){
    for (let i = 1; i <= 5; i++ ){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection); 
    }
    
    if (humanScore > computerScore){
        console.log(`Human Score : ${humanScore} `);
        console.log(`Computer Score : ${computerScore}`)
        console.log('Human wins');
    }
    else if (humanScore < computerScore) {
        console.log(`Human Score : ${humanScore} `);
        console.log(`Computer Score : ${computerScore}`)
        console.log('Computer wins');
    }
    else {
        console.log(`Human Score : ${humanScore} `);
        console.log(`Computer Score : ${computerScore}`)
        console.log('Its a tie!');
    }
}

playGame();








    






