var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');
var starterText = document.querySelector('#starterText');
var winningText = document.querySelector('#winningText');

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function () {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        // Add Click Listeners to Squares
        squares[i].addEventListener('click', function () {
            // Get Color Which Was clicked
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = 'Correct';
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                starterText.style.display = 'none';
                winningText.style.display = 'block';
                // h1.textContent = 'congratulation! you won'
                resetButton.textContent = 'Play Again?';
            } else {
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = 'Try Again';
            }
            // Compare Color to pickedColor
        });
    }
}

function reset() {
    // Generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new radndom color
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for (var i = 0; i < squares.length; i++) {
        // Add Colors to Sqaures
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    h1.style.backgroundColor = 'steelblue';
    resetButton.textContent = 'New Colors';
    messageDisplay.textContent = '';
    starterText.style.display = 'block';
    winningText.style.display = 'none';
}

resetButton.addEventListener('click', reset);

function changeColors(color) {
    // Loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // Change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];
    // repeat num times
    for (var i = 0; i < num; i++) {
        // get random colors and puhs into arr
        arr.push(randomColor());
    }
    // return the array
    return arr;
}

function randomColor() {
    // red
    var r = Math.floor(Math.random() * 256);
    // green
    var g = Math.floor(Math.random() * 256);
    // blue
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}