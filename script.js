//Övning 1
//let min = prompt("Skriv in minsta värde")
//let max = prompt("Skriv in största värde")
let min = 10;
let max = 20;

const addNumbers = function(min, max) {
    let sum = 0;
    for(let i = min; i < max; i++) {
        sum += i;
    }
    console.log(`Övning 1: Min: ${min} Max: ${max} Resultat: ${sum}`);
    return sum;
}

addNumbers(min, max);

//Övning 2
const numSquared = function(n) {
    return n*n;
}
let num = 12;
console.log(`Övning 2: Kvadrat av ${num} blir ${numSquared(num)}`);

//Övning 3
const addNumbersSquared = function(min, max) {
    let sum = 0;
    for(let i = min; i < max; i++) {
        sum += numSquared(i);
    }
    return sum;
}

console.log(`Övning 3: ${addNumbersSquared(1, 5)}`);

//Övning 4
const reverseString = function(string) {
    let reversedString = string.split('').reverse().join('')
    
    return reversedString
}

const palindromeCheck = function(string) {
    let palindrome = true;
    let reversedString = reverseString(string);

    for(let i = 0; i < string.length; i++) {
        if(string.charAt(i) !== reversedString.charAt(i)) {
            palindrome = false;
            break;
        }
    }

    return palindrome;
}

let palindromeText = 'Kajak';
palindromeText = palindromeText.toLowerCase();
let palindrome = (palindromeCheck(palindromeText)) ? 'är ett palindrom' : 'är INTE ett palindrom';
console.log(`Övning 4: ${palindromeText} ${palindrome}`);

//Övning 5
let btn = document.getElementById('btn')

btn.onclick = function() {
    let colors = ['blue', 'red', 'green', 'purple', 'pink', 'orange', 'yellow'];
    let random = parseInt(Math.random()*colors.length);

    document.querySelector('body').style.backgroundColor = colors[random]
}

//Övning 6
let board = document.querySelector('.board-container')
let inputBox = board.children;
let gameBoard = []
let player = true;
let isGameActive = true

const play = function() {
    resetBoard();
    makeTurn();
}

const resetBoard = function() {
    for(let currentBox of inputBox) {
        currentBox.innerText = '';
        let index = Array.prototype.indexOf.call(inputBox, currentBox)
        gameBoard[index] = undefined;
    }
}

const makeTurn = function() {
    for(let currentBox of inputBox) {
        currentBox.addEventListener('click', event => {
            let index = Array.prototype.indexOf.call(inputBox, currentBox)
            if(gameBoard[index] === undefined) {
                currentBox.innerText = (player) ? 'O' : 'X';
                player = !player;
                gameBoard[index] = (player) ? 'O' : 'X';

                setTimeout(function(){checkIfWon()},100);
            }
           
           
            console.log(gameBoard);
            console.log(index);
        })
    }
}

const checkIfWon = function() {
    let win = false;
    
    for(let i = 0; i < 3; i++) {  
        if(gameBoard[3*i] !== undefined && gameBoard[3*i+1] !== undefined && gameBoard[3*i+2] !== undefined) {   //Horizontal
            if(gameBoard[3*i] === gameBoard[3*i+1] && gameBoard[3*i] === gameBoard[3*i+2]) {
                win = true;
            }
        }

        if(gameBoard[i] !== undefined && gameBoard[i+3] !== undefined && gameBoard[i+6] !== undefined) {    //Vertical
            if(gameBoard[i] === gameBoard[i+3] && gameBoard[i] === gameBoard[i+6]) {
                win = true;
            }
        }
    }

    for(let i = 0; i < 2; i++) {
        if(gameBoard[i*2] !== undefined && gameBoard[4] !== undefined && gameBoard[8 - i*2] !== undefined) {    //Diagonal
            if(gameBoard[i*2] === gameBoard[4] && gameBoard[i*2] === gameBoard[8 - i*2]) {
                win = true;
            }
        }
    }

    if(win) {
        let winner = (!player) ? 'O' : 'X';
        alert(`Grattis till spelare ${winner}`);
        play();
    }

    if(!gameBoard.includes(undefined)) {
        alert('Det blev oavgjort!');
        play();
    }
}

play();