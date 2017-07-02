//initialise variables
var winners = [0, 0, 0, 0, 0, 0];
var userNumb = [0, 0, 0, 0, 0, 0];
var winLevel = 0;

//when Lotto is clicked, do the thing
$(document).ready(function () {
    $(".Gen").click(function () {
        //generate the random numbers
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

        //write winners to boxes
        for (j = 0; j < 6; j++) {
            document.getElementById("CompLotto" + String([j])).innerHTML = winners[j];
        }

        //get user input into an array
        $(".Pick").each(function (input, value) {
            userNumb[input] = $(this).val();
        });

        //trying to test user input array (not working)
        //$("#test").html(userNumb);

        //comparing the arrays WIP
        $(winners).each(function (i, value) {
            $(userNumb).each(function (k, value) {
                if (String(winners[i]) === String(userNumb[k])) {
                    winLevel = winLevel + 1;
                }
            })
        })
        $("#test").html(winLevel);
        winLevel = 0;


    });
});
