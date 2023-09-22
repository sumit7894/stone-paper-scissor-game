let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissor");
let resultButtons = document.querySelector(".div-buttons");
let playagainButton = document.querySelector(".play-again-btn");
//DIVS MAJOR
let playboard = document.querySelector(".play-board");
let containerDiv = document.querySelector(".container");
let resultContainer = document.querySelector(".result-board-container");
let scoreContainer = document.querySelector(".score-board-container");
//Last page
let lastPageDiv = document.querySelector(".last-page-container");
let stars = document.querySelector(".stars")
let trophy = document.querySelector(".trophy");
let heading1 = document.querySelector(".heading-1");
let heading2 = document.querySelector(".heading-2");
let playAgainButton2 = document.querySelector(".play-again-button-2");
let finalPage = document.querySelector(".final-page");
//NEXT BUTTON
let nextButton = document.getElementById("next-button");
// RULES SPAN
let cross = document.querySelector(".cross");
let rulesContainer = document.querySelector(".rules-container");
let ruleButton =document.querySelector(".showRules");
let ruleButton2 = document.getElementById("result-rule-btn");

//FETCH SCORES
let userScore = JSON.parse(localStorage.getItem("userScore")) || 0;
let computerScore = JSON.parse(localStorage.getItem("computerScore")) || 0;

//INITIAL HIDING OF RESULT CONTAINER
resultContainer.classList.add("hideDiv");
resultButtons.classList.add("hideDiv");
lastPageDiv.classList.add("hideDiv");
rulesContainer.style.display="none";

function hideLastPage(){
finalPage.classList.add("hideDiv");
}
hideLastPage();

//  ACTIONS ON RULE CONTAINER AND ITS BUTTON
ruleButton.addEventListener("click",function(){
rulesContainer.style.display="block";
});

ruleButton2.addEventListener("click",function(){
rulesContainer.style.display="block";
});

cross.addEventListener("click",()=>{
    rulesContainer.style.display="none";
});
//  ACTIONS ON NEXT BUTTON
nextButton.addEventListener("click",function(){
    scoreContainer.classList.add("hideDiv");
    resultContainer.classList.add("hideDiv");
    resultButtons.classList.add("hideDiv");
    containerDiv.classList.add("hideDiv");

    finalPage.classList.remove("hideDiv");
    ruleButton.classList.remove("hideDiv");
});
//ACTIONS ON FINAL PAGE PLAY AGAIN
playAgainButton2.addEventListener("click",function(){
    finalPage.classList.add("hideDiv");

    containerDiv.classList.remove("hideDiv");
    scoreContainer.classList.remove("hideDiv");
    playboard.classList.remove("hideDiv");
})
// ACTION ON PLAY AGAIN BUTTON
playagainButton.addEventListener("click",()=>{
    resultContainer.classList.add("hideDiv");
    resultButtons.classList.add("hideDiv");
    resultButtons.classList.add("hideDiv");

    playboard.classList.remove("hideDiv");
    ruleButton.classList.remove("hideDiv");
    
});
const choices = ["rock", "paper", "scissors"];
//UPDATE SCORES
function updateScores(){
    document.querySelector(".updateUserScore").textContent=userScore;
    document.querySelector(".updatePcScore").textContent=computerScore;
}
//HIDING PLAY BOARD
function hidePlayboard(){
    playboard.classList.add("hideDiv");
}
//SHOW RESULT BOARD
function showResultContainer(){
    resultContainer.classList.remove("hideDiv");
}
//  FINDING THE WINNER
function findWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "TIE UP";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        document.querySelector(".updateUserScore").textContent=userScore;
        return "YOU WIN";
    } else {
        computerScore++;
        document.querySelector(".updatePcScore").textContent=computerScore;
        return "YOU LOST";
    }
}

//  UPDATE RESULT
function updateResult(result){
    if(result === "YOU WIN"){
        document.querySelector(".result-text-2").textContent="AGAINST PC";
        document.querySelector(".play-again-btn").textContent="PLAY AGAIN";
        document.querySelector(".result-text-1").textContent="YOU WIN";
        resultButtons.classList.remove("hideDiv");
        ruleButton.classList.add("hideDiv");
        highlightUser();
    }else if(result ==="YOU LOST"){
        document.querySelector(".result-text-2").textContent="AGAINST PC";
        document.querySelector(".play-again-btn").textContent="PLAY AGAIN";
        document.querySelector(".result-text-1").textContent="YOU LOST";
        highlightPC();
    }else{
        document.querySelector(".result-text-1").textContent="TIE UP";
        document.querySelector(".result-text-2").textContent="";
        document.querySelector(".play-again-btn").textContent="REPLAY";
        highlightNone();
    }
}
//  UPDATE PICKED ITEMS
function updatePickedIcons(userChoice,computerChoice){
    document.getElementById("user-choice-img").src=`./images/${userChoice}.png`;
    document.getElementById("pc-choice-img").src=`./images/${computerChoice}.png`;
    if(userChoice ==="rock"){
        document.querySelector(".users-choice").style.borderColor="#0074B6";
    } else if(userChoice == "paper"){
        document.querySelector(".users-choice").style.borderColor="#FFA943";
    } else{
        document.querySelector(".users-choice").style.borderColor="#BD00FF";
    }
    if(computerChoice ==="rock"){
        document.querySelector(".pc-choice").style.borderColor="#0074B6";
    }else if(computerChoice ==="paper"){
        document.querySelector(".pc-choice").style.borderColor="#FFA943";
    }else{
        document.querySelector(".pc-choice").style.borderColor="#BD00FF";
    }
}
//  FINDING THE CHOICE OF PC
function getPcChoice(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
updateScores();
 function play(userChoice){
    const computerChoice = getPcChoice();
    console.log(computerChoice);
    const result = findWinner(userChoice, computerChoice);
    updatePickedIcons(userChoice,computerChoice);
    hidePlayboard();
    showResultContainer();
    updateResult(result);
    localStorage.setItem("userScore", JSON.stringify(userScore));
    localStorage.setItem("computerScore", JSON.stringify(computerScore));
 }
rock.addEventListener("click",()=>play("rock"))
paper.addEventListener("click",()=>play("paper"))
scissors.addEventListener("click",()=>play("scissors"))


let userFocus3 = document.querySelector(".user-circle-3");
let userFocus2 = document.querySelector(".user-circle-2");
let userFocus1 = document.querySelector(".user-circle-1");
let pcFocus3   = document.querySelector(".pc-circle-3");
let pcFocus2   = document.querySelector(".pc-circle-2");
let pcFocus1   = document.querySelector(".pc-circle-1");

function highlightUser(){
    pcFocus3.classList.remove("win-circle-3");
    pcFocus2.classList.remove("win-circle-2");
    pcFocus1.classList.remove("win-circle-1");

    userFocus3.classList.add("win-circle-3");
    userFocus2.classList.add("win-circle-2");
    userFocus1.classList.add("win-circle-1");
}

function highlightPC(){
    userFocus3.classList.remove("win-circle-3");
    userFocus2.classList.remove("win-circle-2");
    userFocus1.classList.remove("win-circle-1");

    pcFocus3.classList.add("win-circle-3");
    pcFocus2.classList.add("win-circle-2");
    pcFocus1.classList.add("win-circle-1");
}
function highlightNone(){
    pcFocus3.classList.remove("win-circle-3");
    pcFocus2.classList.remove("win-circle-2");
    pcFocus1.classList.remove("win-circle-1");

    userFocus3.classList.remove("win-circle-3");
    userFocus2.classList.remove("win-circle-2");
    userFocus1.classList.remove("win-circle-1");
}
