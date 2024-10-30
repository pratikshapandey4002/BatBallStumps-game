const buttons = document.querySelectorAll('.button');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('Computer-choice');
const winnerDisplay = document.querySelector('#winner');

const choices =[ 'bat' , 'ball' , 'stumps'];


function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum];
}

function getWinner(userChoice, computerChoice){
    if(userChoice === computerChoice)
    {
        return "It's a draw!!";
    }
    if( userChoice == 'ball' && computerChoice=='stumps' ||
        userChoice == 'bat' && computerChoice=='ball' ||
        userChoice == 'stumps' && computerChoice=='bat'   
    )
    {
        return "You Win!!";
    }
    else{
        return "Computer win's !!";
    }
}
buttons.forEach(button =>{
    button.addEventListener('click' , () => {
        const userChoice = button.textContent.toLowerCase();
        const computerChoice = getComputerChoice();

        userChoiceDisplay.textContent = userChoice;
        computerChoiceDisplay.textContent= computerChoice;

        const winner = getWinner(userChoice , computerChoice);
        winnerDisplay.textContent = winner;

    });

}
);





















