"use strict"

window.addEventListener("load",start());

let listIndex = 0;
let lastGuess = -1;

function start(){
    console.log("running");
    document.querySelector("#ready-button").addEventListener("click",(event)=>startGame())
    

}

function startGame(){
    listIndex++;
    const guess = makeGuess();
    lastGuess = guess;
    const list = document.querySelector("#guess-list");
    const html = ` <li id="li-id${listIndex}">${listIndex}. I'm guessing ${guess} - Is that <button id="too-low-button">too low</button> <button id="too-high-button">too high</button> <button id="correct-button">Correct!</button>?</li>`
    list.insertAdjacentHTML("beforeend",html);
    document.querySelector("#ready-p").remove();

    document.querySelector("#too-high-button").addEventListener("click",(event)=>guessTooHigh())
    document.querySelector("#too-low-button").addEventListener("click",(event)=>guessTooLow())
    document.querySelector("#correct-button").addEventListener("click",(event)=>guessCorrect())
}


function makeGuess(){
    return Math.floor(Math.random()*99)+1
    /* return 50; */
}



function guessTooHigh(){
    listIndex++;
    const guess = makeGuess();
    const list = document.querySelector("#guess-list");

    const html = `<li id="li-id${listIndex-1}">${listIndex-1}. I'm guessing ${lastGuess} - that was too high.</li>
    <li id="li-id${listIndex}">${listIndex}. I'm guessing ${guess} - Is that <button id="too-low-button">too low</button> <button id="too-high-button">too high</button> <button id="correct-button">Correct!</button>?</li>`
    document.querySelector(`#li-id${listIndex-1}`).remove();
    list.insertAdjacentHTML("beforeend",html);
    
    lastGuess = guess;
    document.querySelector("#too-high-button").addEventListener("click",(event)=>guessTooHigh())
    document.querySelector("#too-low-button").addEventListener("click",(event)=>guessTooLow())
    document.querySelector("#correct-button").addEventListener("click",(event)=>guessCorrect())
}
function guessTooLow(){
    console.log("too low");
    listIndex++;
    const guess = makeGuess();
    const list = document.querySelector("#guess-list");

    const html = `<li id="li-id${listIndex-1}">${listIndex-1}. I'm guessing ${lastGuess} - that was too low.</li>
    <li id="li-id${listIndex}">${listIndex}. I'm guessing ${guess} - Is that <button id="too-low-button">too low</button> <button id="too-high-button">too high</button> <button id="correct-button">Correct!</button>?</li>`
    document.querySelector(`#li-id${listIndex-1}`).remove();
    list.insertAdjacentHTML("beforeend",html);
    
    lastGuess = guess;
    document.querySelector("#too-high-button").addEventListener("click",(event)=>guessTooHigh())
    document.querySelector("#too-low-button").addEventListener("click",(event)=>guessTooLow())
    document.querySelector("#correct-button").addEventListener("click",(event)=>guessCorrect())
}



function guessCorrect(){
    console.log("correct");
    listIndex++;
    const guess = makeGuess();
    const list = document.querySelector("#guess-list");

    const html = `<li id="li-id${listIndex-1}">${listIndex-1}. I'm guessing ${lastGuess} - that is correct.</li>
    <br>
    <p>I finally guessed it!`
    document.querySelector(`#li-id${listIndex-1}`).remove();
    list.insertAdjacentHTML("beforeend",html);
    

}

