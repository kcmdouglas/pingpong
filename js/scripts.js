var pingPong = function(userNumber) {
  if ((userNumber % 3 === 0) || (userNumber % 5 === 0)) {
    return true;
  } else {
    return false;
  }
};

$(function() {
  $("form#game").submit(function(event) {
    $("#outputList").empty();

    var number = parseInt($("#userNumber").val())
    var output = pingPong(number)
    
    event.preventDefault();
  });
});
