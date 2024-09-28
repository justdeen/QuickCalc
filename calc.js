//Retrieving the HTML elements and storing them in a variable
const display = document.getElementById('display')
const feedback = document.getElementById('feedback')
const remove = document.getElementById('remove')
const store = document.getElementById('store')
const max = document.getElementById('max')
const msg = document.getElementById('msg')

//Declaration of counter variable for indicating maximum storage of history 
let max1 = 0
max.innerText = `${max1}/20`

//Function for displaying user input
function toDisplay(input){
    display.value += input;
}

//Function for clearing all the values in the calculator display
function toClear(){
    display.value = ''
}

//Function for inserting left parenthesis
function parenthesis1(){
    display.value += '*('
}

//Function for inserting right parenthesis
function parenthesis2(){
    display.value += ')'
}

//Function for checking for Null input, math error, displaying and storing answers
function ans(){
    if(!display.value){
        display.value = 'Null'
        return;
    }
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = 'Math error'
    }
    if(max1<=20 && display.value && display.value!='Math error'){
        store.innerHTML += `${display.value}\n<br>`
        max1 += 1
        max.innerText = `${max1}/20`
    }
}

//Function for deleting individual characters in the display
remove.addEventListener('click', () => {
    let del = String(display.value)
    let del2 = del.length-1
    display.value = del.slice(0, del2)
})

//Function for copying answers stored in the history
function copy(){
    navigator.clipboard.writeText(store.innerText)
    msg.innerHTML = "Copied!";
    setTimeout(() => {
        msg.innerHTML = "";
      }, 900);
}

//Function for deleting answers stored in the history
function del(){
    store.innerText = '';
    max1 = 0;
    max.innerText = `${max1=0}/20`;
}
