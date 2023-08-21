document.addEventListener('DOMContentLoaded', function(){
   

    darkMode();
});

const display = document.querySelector(".calculator__display");
const buttons = document.querySelectorAll(".calculator__row-btn button");
const containerCalculator = document.querySelector('.container__calculator');
const container = document.querySelector('.container');

function darkMode(){
    const btnDarkMode = document.querySelector('.btn-dark-mode');
    btnDarkMode.addEventListener('click', function (){
        document.body.classList.toggle('darkmode');
        container.classList.toggle('darkmode');
        containerCalculator.classList.toggle('darkmode');
        
        
    });
}

