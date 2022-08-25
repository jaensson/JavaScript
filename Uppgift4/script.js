let input1Element, input2Element, resultElement;

function init() {
    input1Element = document.getElementById('input1');
    input2Element = document.getElementById('input2');
    resultElement = document.getElementById('result');

    document.getElementById('runBtn').onclick = doCalculations;
    
}

window.onload = init


function doCalculations() {
    let length; 
    let width;
    let area;
    let distance;
    let distance2;
    let unit = ['steg', 'fot', 'tum'];
    let conv = [90, 30, 2.54];

    length = Number(input1Element.value);
    width = Number(input2Element.value);

    area = length * width;

    resultElement.innerHTML = `<p>Rektangels area blir ${area} m<sup>2</sup></p>`;

    resultElement.innerHTML = `<p>Längden ${length} m blir:</p>`;
    distance = length / conv[0] * 100;
    resultElement.innerHTML += `<p>${distance} ${unit[0]} </p>`;
    distance = length / conv[1] * 100;
    resultElement.innerHTML += `<p>${distance} ${unit[1]}</p>`;
    distance = length / conv[2] * 100
    resultElement.innerHTML += `<p>${distance} ${unit[2]}</p>`;

    area = Math.PI * length * width / 4;

    resultElement.innerHTML += `<p>Ellipsens area blir ${area} m<sup>2</sup></p>`;

    area = length*1.5 * (width+3);
    resultElement.innerHTML += `<p>Rektangles area blir ${area} m<sup>2</sup> om längden ökas med 50% och bredden med 3 m</p>`;


    distance = length / conv[1] * 100;
    distance2 = width / conv[1] * 100;
    area = distance * distance2 / 2;

    resultElement.innerHTML += `<p>Triangels area blir ${area} ${unit[1]} <sup>2</sup></p>`;
}