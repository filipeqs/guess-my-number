'use strict';

const body = document.querySelector('body');
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const again = document.querySelector('.again');
const highscore = document.querySelector('.highscore');

let secretNumber;
let initialScore;
let initialHighscore = 0;

const setMessage = (newMessage) => {
    message.textContent = newMessage;
};

const setScore = (newScore) => {
    score.textContent = newScore;
};

const decreaseScore = () => {
    if (initialScore > 1) {
        initialScore--;
        setScore(initialScore);
    } else {
        setScore(0);
        setMessage('💥 You lost the game!');
    }
};

const initialGame = () => {
    initialScore = 20;
    setScore(initialScore);
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    guess.value = '';
    number.textContent = '?';
    setMessage('Start guessing...');
    body.style.backgroundColor = '#222';
};

const setHighscore = (newHighscore) => {
    if (newHighscore > initialHighscore) {
        initialHighscore = newHighscore;
        highscore.textContent = newHighscore;
    }
};

check.addEventListener('click', () => {
    if (!guess.value) {
        setMessage('⛔️ No number!');
    } else if (Number(guess.value) === secretNumber) {
        setMessage('🎉 Correct Number!');
        number.textContent = guess.value;
        body.style.backgroundColor = '#60b347';
        setHighscore(score.textContent);
    } else if (Number(guess.value) !== secretNumber) {
        Number(guess.value) > secretNumber ? setMessage('📈 Too High!') : setMessage('📉 Too Low!');
        decreaseScore();
    }
});

again.addEventListener('click', initialGame);

// On Load
initialGame();
