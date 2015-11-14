/*This function will take the updated index number
from my loop, apply these rules, and then output
ping, pong, pingpong or the index number into
the outputList */
var pingPongType = function(i) {
  if ((i % 5 === 0) || (i % 3 === 0) || (i % 15 === 0)) {
    if (i % 15 === 0) {
        return "pingpong";
    } else if (i % 5 === 0) {
        return "pong";
    } else {
        return "ping";
    }
  } else {
    return i;
  }
}

$(function() {
  $("#game").submit(function(event) {
    $('#outputList').empty();

    var number = parseInt($("#userNumber").val());
    var warning = "Whoops! Please enter a number (decimals will be rounded)!"

    if (Number.isNaN(number) === true) {
      alert(warning);
    }

/*This loop will count from 1 to the user input number,
run each index number through the pingPongType function,
then output the results into the outputList*/
    for (var i = 1; i <= number; i += 1) {
      var output = pingPongType(i)
      $('#outputList').append("<li>" + output + "</li>")
    }

    event.preventDefault();
  });
});
