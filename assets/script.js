let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput')


// Event listeners
numberInput.addEventListener('input', getFactFetch);

// USING FETCH API
function getFactFetch () {
    let number = numberInput.value;
    fetch(`http://numbersapi.com/${number}`)
    .then(response => response.text())
    .then(data => {
        if(number != '') {
            fact.classList.remove('hide-fact');
            factText.innerText = data;
        } else if (numberInput.value == 0) {
            fact.classList.add('hide-fact');
        }
    })
    .catch(error => console.log('error'));

}

// GETTING INFO VIA AJAX ---
// function getFactAJAX() {
//     let number = numberInput.value;

//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', `http://numbersapi.com/${number}`);

//     xhr.onload = function(){
//         if(this.status == 200 && number != '') {
//             fact.classList.remove('hide-fact');
//             factText.innerText = this.responseText;
//             console.log('number added')
//         }

//     }
//     xhr.send();
// }

// 