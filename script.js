'use strict';
(function () {
    let output = document.getElementById("show-output");
    let button = document.getElementById("show-button");
    let name;

    button.addEventListener("click", function () {

        if (name !== undefined) {
            output.innerText = "I already sad hello, " + name;
        } else {
            name = window.prompt("Podaj imię: ");

            if (name == null || name === "") {
                output.innerText = "Hello stranger!!!"
            } else {
                output.innerText = "Twoje imię to: " + name + " !";
            }
        }
    });

})();
