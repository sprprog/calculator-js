const display = document.getElementById('display');

function addToDispaly(input){
    display.value += input;
}
function clearDispaly(){
    display.value = '';
}
function calcutate(){
display.value =eval(display.value)
}