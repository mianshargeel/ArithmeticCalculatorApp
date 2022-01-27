"use strict";
console.log('this ia a tutorial in which we are creating a simple calculater');

let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button"); //using tag name
// console.log(buttons);
let vlaueOfScreen = ""; // astring variable

for (let item of buttons) {
    item.addEventListener("click", (e) => {
        let buttonText = e.target.innerText; //text typed by user
        console.log("Button Text is:", buttonText);

        if (buttonText == "x") {
            buttonText = "*";
            vlaueOfScreen += buttonText;
            screen.value = vlaueOfScreen;

        } else if (buttonText == "Del") { //removing digits one by one
            vlaueOfScreen = vlaueOfScreen.substring(0, vlaueOfScreen.length - 1);
            screen.value = vlaueOfScreen;

        } else if (buttonText == "C") { //to delete complete input-screen
            vlaueOfScreen = "";
            screen.value = vlaueOfScreen;

        } else if (buttonText == "=") {
            screen.value = eval(vlaueOfScreen); //please google 

        } else {
            vlaueOfScreen += buttonText;
            screen.value = vlaueOfScreen;
        }

    });
} //end of for-loop