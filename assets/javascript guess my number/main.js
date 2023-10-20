let r  = Math.floor(Math.random() * 10);


const elem1 = document.querySelector('#elem1')
const elem2 = document.querySelector('#elem2')
const elem3 = document.querySelector('#elem3')


let counter = 1
document.getElementById('guessSubmit').onclick = function (e){
    e.preventDefault();
    let x= document.getElementById('guessField').value;
    if(x>r){
        elem2.textContent = "try smaller number"
    }
    else if(x<r){
        elem3.textContent = "try bigger number"
    }
    else{
        elem1.textContent = "congrats"
    }

}