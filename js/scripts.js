var pingPong = function(i) {
  if (isPingPong) {
    if (i % 15 === 0) {
      return "pingpong";
    } else if (i % 3 === 0) {
      return "ping";
    } else if (i % 5 === 0) {
      return "pong";
    }
  } else {
    return false;
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
    

    for (var i = 1; i <= number; i += 1) {
      if (winner) {
        $('#outputList').append("<li>" + winner +"</li>");
      } else if (!winner){
        $('#outputList').append("<li>" + i +"</li>");
      }
    }
    event.preventDefault();
  });
});
