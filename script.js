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
    for(let i = min+1; i < max; i++) {
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

    for(let i = 0; i < string.lenght; i++) {
        if(string.charAt(i) !== reversedString.charAt(i)) {
            palindrome = false;
            break;
        }
    }

    return palindrome;
}

let palindromeText = 'kajak'
palindromeText.toLowerCase();

console.log(`Övning 4: ${palindromeText} ${palindromeCheck("kajak")}`);