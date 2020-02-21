let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput')


// Event listeners
numberInput.addEventListener('input', getFactAJAX);

function getFactAJAX() {
    let number = numberInput.value;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://numbersapi.com/${number}`);

    xhr.onload = function(){
        if(this.status == 200 && number != '') {
            fact.classList.remove('hide-fact');
            factText.innerText = this.responseText;
            console.log('number added')
        }

    }
    xhr.send();
}

// 