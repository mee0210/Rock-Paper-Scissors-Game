let userScore=0;
let compScore=0;
 
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscpara=document.querySelector("#mysc");
const compscpara=document.querySelector("#compsc");

const genCompChoice=()=>{
    //rock,paper,scissor
    const options=["Rock","Paper","Scissors"];
       //generate comp choice
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];

}
const drawGame=()=>{
    console.log("game was a draw");
    msg.innerText="Game was a draw";
}
const showWinner=(userWin, userChoice, compChoice)=>{
    if (userWin){
        userScore++;
        userscpara.innerText=userScore;
        console.log("You win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
    
    }
    else{
        compScore++;
        compscpara.innerText=compScore;
        console.log("You lose");
        msg.innerText=`You Lost. ${compChoice} beats your ${userChoice}`;
    }
}
const playGame=(userChoice)=>{
    console.log("user choice= ", userChoice);
    const compChoice=genCompChoice();
    console.log("computer choice= ",compChoice);
    if(userChoice=== compChoice)
    {
        //draw
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=== "Rock"){
        userWin=(compChoice==="paper")?false:true;
        }
        else if(userChoice=== "Paper")
        {
            userWin=(compChoice==="Scissors")?false:true;
        }
        else{
            userWin=(compChoice=== "Rock")?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
      
        playGame(userChoice);
    })
})

