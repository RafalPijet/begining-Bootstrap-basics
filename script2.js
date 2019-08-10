'use strict';
(function () {
    let button = document.getElementById("count-button");
    let output = document.getElementById("show-output");
    let removeBox13 = document.getElementById("1");
    let changeDescription = document.getElementById("2");
    let changeDescriptionAll = document.getElementById("3");
    let changeStyleSelected = document.getElementById("4");
    let removeClass = document.getElementById("5");

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
    });

    removeBox13.addEventListener("click", function () {
        document.getElementById("box13").remove()
    });

    changeDescription.addEventListener("click", function () {
       let boxesWithBg = document.getElementsByClassName("box-bg");
       let description = window.prompt("Podaj opis:");
       for (let i = 0; i < boxesWithBg.length; i++) {
           boxesWithBg[i].innerHTML = description
       }
    });

    changeDescriptionAll.addEventListener("click", function () {
        let headers = document.getElementsByTagName('header');
        let description = window.prompt("Podaj opis:");
        let counter = 0;

        while (counter < headers.length) {
            headers[counter].innerHTML = description;
            counter ++;
        }
    });

    changeStyleSelected.addEventListener("click", function () {
       let selectedElements = [];
       let box5Table = document.getElementById("box5").getElementsByTagName("header");
       selectedElements.push(box5Table[0]);
       selectedElements.push(document.querySelector("#box7 header"));

       for (let i = 0; i < selectedElements.length; i++) {
           selectedElements[i].classList.add("header-special");
       }
    });

    removeClass.addEventListener("click", function () {
        document.getElementById("box3").classList.remove("box-bg");
        document.querySelector("#box5 header").innerHTML = "My header is fancy";
    })
})();
