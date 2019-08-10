'use strict';
(function () {
    let button = document.getElementById("show-button");
    let output = document.getElementById("show-output");

    const checkNumber = function (number, divisibilityNumber) {
        return number % divisibilityNumber === 0;
    };

    button.addEventListener("click", function () {
        let userNumber = window.prompt("Podaj liczbę:");
        let divisibilityNumber = window.prompt("Podaj dzielnik: ");

        if (checkNumber(userNumber, divisibilityNumber)) {
            output.innerText = "Liczba " + userNumber + " jest podzielna przez " + divisibilityNumber;
        } else {
            output.innerText = "Liczba " + userNumber + " NIE jest podzielna przez " + divisibilityNumber;
        }
    })
})();
