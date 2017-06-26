//initialise variables
var winners = [];

//function for generating winning numbers (random, all unique, ordered)
function Print() {
    //testing if your numbers are okay to play with
    "use strict";
    var message, x;
    message = document.getElementById("goo");
    message.innerHTML = " ";
    x = document.getElementById("puck").value;
    try {
        if (x === " ") {
            throw "is Empty";
        }
        if (isNaN(x)) {
            throw "not a number";
        }
        if (x > 59) {
            throw "too high";
        }
        if (x < 1) {
            throw "too low";
        }
     catch (err) {
        message.innerHTML = "Input " + err;
    }
    }



    for (i = 0; i < 6; i++) {
        winners[i] = Math.floor(Math.random() * 59);

        winners = winners.filter(function (item, index, inputArray) {
            return inputArray.indexOf(item) == index;
        });
    }
    while (winners.length < 6) {
        winners.push(Math.floor(Math.random() * 59));

        winners = winners.filter(function (item, index, inputArray) {
            return inputArray.indexOf(item) === index;
        });
    }
    //sorting winners
    winners.sort(function (a, b) {
        return a - b;
    });
    //writing winners to html
    for (i = 0; i < 6; i++) {
        document.getElementById("CompLotto" + String([i])).innerHTML = winners[i];
    }
}
//testing
//document.getElementById('goo').innerHTML = winners;



function Error() {
    var message, x;
    message = document.getElementById("goo");
    message.innerHTML = "";
    x = document.getElementById("puck").value;
    try {
        if (x === "") throw "is Empty";
        if (isNaN(x)) throw "not a number";
        if (x > 59) throw "too high";
        if (x < 0) throw "too low";
    } catch (err) {
        message.innerHTML = "Input " + err;
    }
}
