var pingPongType = function(i) {
  if (i % 15 === 0) {
      return "pingpong";
  } else if (i % 5 === 0) {
      return "pong";
  } else {
      return "ping";
  }
}

var isPingPong = function(i) {
  if ((i % 5 === 0) || (i % 3 === 0) || (i % 15 === 0)) {
    return pingPongType(i);
  } else {
    return false;
  }
}

$(function() {
  $("#game").submit(function(event) {
    $('#outputList').empty();

    var number = parseInt($("#userNumber").val());
    var whichPingPong = pingPongType(i)

    for (var i = 1; i <= number; i += 1) {
      if (isPingPong(i)) {
        $('#outputList').append("<li>" + whichPingPong + "</li>");
      } else {
        $('#outputList').append("<li>" + i + "</li>");
      }
    }
    event.preventDefault();
  });
});
