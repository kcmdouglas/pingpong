var pingPong = function(i) {
  if ((i % 5 === 0) || (i % 3 === 0)) {
    return true;
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
      } else if (i % 3 === 0) {
        $('#outputList').append("<li>ping</li>");
      } else if (i % 5 === 0) {
        $('#outputList').append("<li>pong</li>");
      } else {
        $('#outputList').append("<li>" + i + "</li>");
      }
    }
    event.preventDefault();
  });
});
