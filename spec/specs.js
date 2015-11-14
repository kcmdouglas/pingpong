describe('pingPongType', function() {
  it("returns ping for a number that is divisible by 3", function() {
    expect(pingPongType(6)).to.equal("ping");
  });
  it("returns pong for a number that is divisible by 5", function() {
    expect(pingPongType(10)).to.equal("pong");
  });
  it("returns pingpong for a number that is divisible by 3 and 5", function() {
    expect(pingPongType(30)).to.equal("pingpong")
  });
  it("returns an input number if the number is not divisble by 3 or 5", function() {
    expect(pingPongType(7)).to.equal(7);
  });
});
