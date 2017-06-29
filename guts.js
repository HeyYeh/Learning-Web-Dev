//initialise variables
var winners = [0, 0, 0, 0, 0, 0];
var userNumb = [0, 0, 0, 0, 0, 0];

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
        $("#test").html(userNumb);

        //comparing the arrays WIP
        $(set1).each(function (i, value) {
            $(set2).each(function (k, value) {
                if (set1[i] === set2[k]) {
                    $("#wow").html(set1[i]);
                }

            })
        })


    });
});
