let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInpur')


// Event listeners
numberInput.addEventListener('input', getFactAJAX);

function getFactAJAX() {
    let number = numberInput.value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://numbersapi.com/${number}/math`);

}