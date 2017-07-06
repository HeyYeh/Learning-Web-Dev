//initialise variables
var winners = [0, 0, 0, 0, 0, 0];
var userNumb = [0, 0, 0, 0, 0, 0];
var winLevel = 0;
var cash = 10;
var week = 0;
var gains = 0;
var freebie = 0;
var autGo = false;

//Function used in repetition
function repeatWow() {
  //Reset winLevel on each click
    winLevel = 0;
    //Take money away UNLESS player won a freebie (2 match)
    if (freebie === 0) {
      cash = cash - 2;
      $(".money").html("£" + cash);
    } else {
      freebie = 0;
    }
    //Progress 1 week
    week = week + 1;
    $(".week").html("Week: " + week);

    //generate the random numbers
    for (i = 0; i < 6; i++) {
      winners[i] = Math.floor(Math.random() * 59);

      winners = winners.filter(function(item, index, inputArray) {
        return inputArray.indexOf(item) == index;
      });
    }

    while (winners.length < 6) {
      winners.push(Math.floor(Math.random() * 59));

      winners = winners.filter(function(item, index, inputArray) {
        return inputArray.indexOf(item) === index;
      });
    }

    //sorting winners
    winners.sort(function(a, b) {
      return a - b;
    });

    //write winners to boxes
    for (j = 0; j < 6; j++) {
      document.getElementById("CompLotto" + String([j])).innerHTML = winners[j];
    }

    //get user input into an array
    $(".Pick").each(function(input, value) {
      userNumb[input] = $(this).val();
    });

    //trying to test user input array (not working)
    //$("#test").html(userNumb);

    //comparing the arrays WIP
    $(winners).each(function(i, value) {
      $(userNumb).each(function(k, value) {
        if (String(winners[i]) === String(userNumb[k])) {
          winLevel = winLevel + 1;
        }
      });
    });
    $("#test").html(winLevel);
    //outputs number based on how many matching numbers

    if (winLevel === 2) {
      freebie = 1;
    }
    if (winLevel === 3) {
      //cash = cash + 25;
      //$(".money").html("£" + cash);
      gains = gains + 25;
      $(".Winnings").html("£" + gains);
    }
    if (winLevel === 4) {
      //cash = cash + 75;
      //$(".money").html("£" + cash);
      gains = gains + 75;
      $(".Winnings").html("£" + gains);
    }
    if (winLevel === 5) {
      //cash = cash + 1500;
      //$(".money").html("£" + cash);
      gains = gains + 1500;
      $(".Winnings").html("£" + gains);
    }
    if (winLevel === 6) {
      //cash = cash + 15000000;
      //$(".money").html("£" + cash);
      gains = gains + 15000000;
      $(".Winnings").html("£" + gains);
    }
}


//-------------------------------------------//



//when Lotto is clicked, do the thing
$(document).ready(function() {
  $(".Gen").click(function() {
    
    repeatWow();
  });
});

//------------------------------------------------//

//Auto functions
$(document).ready(function() {
  $(".Aut").click(function() {
    
    //if auto mode is off
    if (autGo === false) {
      autGo = true;
      KillMe = setInterval(repeatWow, 3000);  
      $(".Aut").css("background-color", "olivedrab");      
      return;
      }
    
    //if auto mode is on
    if (autGo === true) {
      autGo = false;
      $(".Aut").css("background-color", "burlywood");
      clearInterval(KillMe);         
      return;
      }    
    
  });
  
});