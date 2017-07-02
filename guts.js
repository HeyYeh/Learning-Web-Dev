//initialise variables
var winners = [0, 0, 0, 0, 0, 0];
var userNumb = [0, 0, 0, 0, 0, 0];
var winLevel = 0;
var cash = 10;
var week = 0;
freebie = 0;

//when Lotto is clicked, do the thing
$(document).ready(function () {
    $(".Gen").click(function () {
        
        //Reset winLevel on each click
        winLevel = 0;
        //Take money away UNLESS player won a freebie (1 match)
        if (freebie === 0) {
            cash = cash - 2;
            $(".money").html("£" + cash);
        }
        else {
            freebie = 0;
        }
        //Progress 1 week    
        week = week + 1;
        $(".week").html("Week: " + week);

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
        //outputs number based on how many matching numbers

        if (winLevel === 1) {
            freebie = 1;
        }
        
    });
});
