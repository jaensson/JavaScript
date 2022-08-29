// JavaScript

// Globala variabler


// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.
let inputElem   //Referens till alla input-taggar i en array med första index tom
let msgElem;    //Referens till en tag med id message
let fruitNames; //En array med alla frukter
let fruitNr;    //Hur många av varje frukt som ska skrivas ut
let selFruitsElem;  //Referens till elementet som skiver ut användarens antal frukter

function init() {
	inputElem = []
    inputElem[1] = document.getElementById('input1');
    inputElem[2] = document.getElementById('input2');
    inputElem[3] = document.getElementById('input3');

    msgElem = document.getElementById('message');

    fruitNames = ["äpple", "banan", "citron", "apelsin", "päron"];
    fruitNr = 0;

    selFruitsElem = document.getElementById('selectedFruits');

    document.getElementById('btn1').onclick = showFruit;
    document.getElementById('btn2').onclick = checkName;
    document.getElementById('btn3').onclick = addFruits;

} // End init

// Funktion showFruit tar användarens värde som skrivits in i den första input-taggen och sedan kontrollerar och justerar det till ett heltal mellan 1-5 för att sedan visa rätt bild
function showFruit() {
    let nr; //Användarens inskrivna tal
    let fruitUr1;   //Sökvög till rätt vald bild

    nr = getNr(1, 5);

    if(nr) {
        fruitUrl = `pics/fruit${nr}.jpg`;
        document.getElementById('fruitImg').src = fruitUrl;
        fruitNr = nr;
    }
    
    

    return;
}

// Funkition checkName kollar om användaren skrivit in rätt namn till den visade bilden
function checkName() {
    let name;   //Användarens input
    name = inputElem[2].value.toLowerCase();

    if(fruitNr == 0) {
        msgElem.innerText = "Välj frukt";
    } else {
        if(fruitNames[fruitNr-1] === name) {
            msgElem.innerText = "Rätt namn";
        } else {
            msgElem.innerText = "Fel namn";
        }
    }

    return;
}

// Funktion getNr kontrollerar om användaren skrivit in rätt värde mellan olika intervall
function getNr(elemNr, high) {
    let nr; //Användarens input

    nr = inputElem[elemNr].value;

    nr = parseInt(nr);
    if(isNaN(nr)) {
        msgElem.innerText = `Du ska skriva in ett tal mellan 1 - ${high}`;
        return null;
    }

    if(nr < 0 || nr > high) {
        msgElem.innerText = `Du ska skriva in ett tal mellan 1 - ${high}`;
        
        return null;
    }
    
    inputElem[elemNr].value = nr;

    return nr;
}

// Funktion addFruits lägger till så många bilder av samma frukt som användaren föredrar 
function addFruits() {
    let amount; //Användarens input
    let imgList;    //En lista med alla bild-taggar
    let i;  //Variabel till for-loopen

    amount = inputElem[3].value;

    if(fruitNr == 0) {
        msgElem.innerText = "Välj frukt";
    } else {
        amount = getNr(3, 9);
    }

    if(!isNaN(amount)) {
        imgList = '';
        for(i = 0; i < amount; i++) {
            imgList += "<img src='./pics/fruit" + fruitNr + ".jpg' alt='frukt'>";
        }
        selFruitsElem.innerHTML += imgList;
    }
}






window.onload = init; // Se till att init aktiveras då sidan är inladdad
