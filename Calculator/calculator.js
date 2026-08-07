let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

function updateCalculation(val){
    calculation += val;

    displayCalculation();

    localStorage.setItem('calculation', calculation);
}

function displayCalculation(){
    document.querySelector('.js-calculation').innerHTML = calculation;
}

function backspace() {
    calculation = calculation.slice(0, -1);
    displayCalculation();
    localStorage.setItem('calculation', calculation);
}

function addPercent() {
    calculation = (eval(calculation) / 100).toString();
    displayCalculation();
    localStorage.setItem('calculation', calculation);
}