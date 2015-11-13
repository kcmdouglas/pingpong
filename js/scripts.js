var pingPong = function(i) {
  if (isPingPong(i)) {
    return pingPongType(i)
  } else {
    return false;
  }
}

var pingPongType = function(i) {
  if ((i % 3 === 0) && (i % 5 != 0)) {
      return "ping";
    } else if ((i % 5 === 0) && (i % 3 !=0)) {
      return "pong";
    } else if (i % 15 === 0){
      return "pingpong";
    }
  }

var isPingPong = function(i) {
  if ((i % 5 === 0) || (i % 3 === 0)){
    return true;
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
      if (pingPong(i)) {
        $('#outputList').append("<li>" + whichPingPong + "</li>");
      } else {
        $('#outputList').append("<li>" + i + "</li>");
      }
    }
    event.preventDefault();
  });
});
