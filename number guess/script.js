let randomNumber=Math.floor(Math.random()*100)+1;
const guesses=document.querySelector(".guesses");
const lastResult=document.querySelector(".lastResult");
const lowOrhi=document.querySelector(".lowOrhi");
const guessSubmit=document.querySelector(".guessSubmit");
const guessField=document.querySelector(".guessField");
let guessCount=1;
let resetButton;
function checkGuess(){
    const userGuess=Number(guessField.value);
    if(guessCount===1){
        guesses.textContent="Previous guesses: ";

    }
    guesses.textContent+=`${userGuess}`;
    if(userGuess===randomNumber){
        lastResult.textContent="Congratuoations! You got it right!";
        lastResult.style.backgroundColor="green";
        lowOrhi.textContent="";
        setGameOver();
    }
    else if(guessCount===10){
        lastResult.textContent="!!!GAME OVER!!!";
        lowOrhi.textContent="";
        setGameOver();

    }
    else {
        lastResult.textContent="wrong!";
        lastResult.style.backgroundColor="red";
        if(userGuess<randomNumber){
            lowOrhi.textContent="Too low, guess again";

        }
        else if(userGuess>randomNumber){
            lowOrhi.textContent="Too high, guess again";
        }
    }
    guessCount++;
    guessField.value="";
    guessField.focus();
}
guessSubmit.addEventListener("click",checkGuess);
function setGameOver(){
    guessField.disabled=true;
    guessSubmit.disabled=true;
    resetButton=document.createElement("button");
    resetButton.textContent="Start new game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click",resetGame);
}
function resetGame(){
    guessCount=1;
    const resetParas=document.querySelectorAll(".resultParas p");
    for(const resetPara of resetParas){
        resetPara.textContent="";
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled=false;
    guessSubmit.disabled=false;
    guessField.value="";
    guessField.focus();
    lastResult.style.backgroundColor="white";
    randomNumber=Math.floor(Math.random()*100)+1;
}