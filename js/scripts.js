var pingPong = function(i) {
  if ((i % 3 === 0) && (i % 5 != 0)) {
    return "ping";
  } else if ((i % 5 === 0) && (i % 6 != 0)) {
    return "pong";
  } else if ((i % 3 === 0) && (i % 5 === 0)) {
    return "ping pong";
  } else {
    return false;
  }
};

$(function() {
  $("#game").submit(function(event) {
    $('#outputList').empty();

    var number = parseInt($("#userNumber").val());

    for (var i = 1; i <= number; i += 1) {
      if (i % 15 === 0) {
        $('#outputList').append("<li>ping pong</li>");
      } else if ((winner) && (i % 5 != 0)) {
        $('#outputList').append("<li>ping</li>");
      } else if ((winner) && (i % 3 != 0)) {
        $('#outputList').append("<li>pong</li>");
      } else {
        $('#outputList').append("<li>" + i + "</li>");
      }
    }
    event.preventDefault();
  });
});
