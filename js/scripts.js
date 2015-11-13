var pingPong = function(userNumber) {
  if ((userNumber % 3 === 0) || (userNumber % 5 === 0)) {
    return true;
  } else {
    return false;
  }
};

$(function() {
  $("form#game").submit(function(event) {

    event.preventDefault();
  });
});
