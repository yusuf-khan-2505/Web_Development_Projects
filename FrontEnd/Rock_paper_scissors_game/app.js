let userScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#player-score");
const compScorepara=document.querySelector("#computer-score");

const drawGame=()=>{
    console.log("Draw");
    msg.textContent = "It's a draw!";
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.textContent = `You Win! Your's ${userChoice} choice beats computer ${compChoice} choice.`;
        msg.style.backgroundColor = "green";
    }
    else{
        comScore++;
        compScorepara.innerText=comScore;
        msg.textContent = `Computer Wins! Computer's ${compChoice} choice beats your ${userChoice} choice.`;
        msg.style.backgroundColor = "red";
    }
};

const gencompChoice=()=>{
    const choices=["rock","paper","scissors"];
    const randomNum=Math.floor(Math.random()*3);
    return choices[randomNum];
};

const playGame=(userChoice)=>{
    console.log("User Choice=", userChoice);
    const compChoice=gencompChoice();
    console.log("Computer Choice=", compChoice);

    if(userChoice===compChoice)
    {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false : true;
        } 
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ? false : true;
        }
        else{
            userWin=compChoice==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach(choice=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});