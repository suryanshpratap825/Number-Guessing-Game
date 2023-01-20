'use strict';
const number = Math.trunc(Math.random() * 20) + 1;;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

    if(!guess){
        document.querySelector('.message').textContent = '😂 No Number';
    }
    if(guess > number){
        document.querySelector('.message').textContent = '😂 High Number';
        score = score -1;
        document.querySelector('.score').textContent = score;
    }
    else if (guess < number){
        document.querySelector('.message').textContent = '😂 Small Number';
        score = score - 1;
        document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = 'Correct';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(highscore <= score)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
    }
}) 

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.score').textContent = 20;
    score = 20;
    document.querySelector('.guess').value = null;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})