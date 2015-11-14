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


    for (var i = 1; i <= number; i += 1) {
      var output = pingPongType(i)
      $('#outputList').append("<li>" + output + "</li>")
    }
    event.preventDefault();
  });
});
