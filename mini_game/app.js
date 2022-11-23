const board = document.querySelector('#board');
const colors = ['#872121', '#1f2bad', '#2ccc36', '#d2e10e', '#eb1aa8']
const SQUARES_NUMBER = 600;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square =document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', setColor);
    square.addEventListener('mouseleave', removeColor);

    board.append(square);
}

function setColor(event) {
    const el = event.target;
    const color = getRandomColor();
    el.style.backgroundColor = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

function removeColor(event) {
    const el = event.target;
    el.style.backgroundColor = '#1d1d1d';
    el.style.boxShadow = `0 0 2px #000`;
};

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
};