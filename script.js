const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const container = document.querySelector('#container');

rockBtn.addEventListener('click', ()=> {
    let computerSelection = getComputerChoice()
    playRound('rock', computerSelection);;
})

paperBtn.addEventListener('click', ()=> {
    let computerSelection = getComputerChoice()
    playRound('paper', computerSelection);
})

scissorsBtn.addEventListener('click', ()=> {
    let computerSelection = getComputerChoice()
    playRound('scissors', computerSelection);
})


function getComputerChoice (){
    choices = ['rock', 'paper', 'scissors'];
    return (choices[Math.floor(Math.random() * 3)]);
    
}


let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice , computerChoice){
    if (humanChoice === computerChoice){
        container.textContent = `\nits a tie!  Human Score: ${humanScore} \n Computer Score: ${computerScore}`;

    }
    else if (humanChoice === 'rock' && computerChoice ==='scissors'){
        humanScore += 1 ;
        container.textContent = `you win rock beats scissors\n Human Score: ${humanScore} \n Computer Score: ${computerScore}`;
        
    }
    else if (humanChoice === 'scissors' && computerChoice ==='paper'){
        humanScore += 1 ;
        container.textContent = `(\nyou win scissors beats paper)\n Human Score: ${humanScore} \n Computer Score: ${computerScore}`;
        
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore += 1 ;
        container.textContent = `(\nyou win paper beats rock)\n Human Score: ${humanScore} \n Computer Score: ${computerScore}`;
        
    }
    else {
        computerScore += 1 ;
        container.textContent = `\nyou lose !\n Human Score: ${humanScore} \n Computer Score: ${computerScore}`;
       
    }
    if (humanScore === 5) {
        container.textContent += '\ncongrats human you have won the game!';
    }
    
    else if (computerScore === 5) {
        container.textContent += '\ncongrats computer you have won the game!';
    }
}

