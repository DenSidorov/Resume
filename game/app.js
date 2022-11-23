const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['#872121', '#1f2bad', '#2ccc36', '#d2e10e', '#eb1aa8', '#1db99a', '#a92c81', '#bac12a'];

let time = 0;
let score = 0;

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', e => {
    if (e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
});

board.addEventListener('click', e => {
    if (e.target.classList.contains('circle')) {
        score++;
        e.target.remove();
        createRandomCircle();
    };
});

//Debug
// startGame();

function startGame() {
    // screens[1].classList.add('up');
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
};

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let curent = --time;
    if (curent < 10) {
        curent = `0${curent}`;
    };
    setTime(curent);
    };    
};

function setTime (valie) {
    timeEl.innerHTML = `00:${valie}`;
};

function finishGame() {
    // timeEl.parentNode.remove();
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Счёт:<span class="primary">${score}</span></h1>`;
};

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width-size);
    const y = getRandomNumber(0, height-size);
    const color = getRandomColor();

    circle.classList.add('circle');
    circle.style.background = `${color}`;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${x}px`;
    circle.style.left = `${y}px`;

    board.append(circle);

};

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
};

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
};

function win() {
    function kill() {
        const circle = document.querySelector('.circle');
        if (circle) {
            circle.click()
        }
    }
    setInterval(kill, 42)
}