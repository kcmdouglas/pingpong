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
});


describe('isPingPong', function() {
  it("returns pingPongType for a number divisible by 3, 5, or 15", function() {
    expect(isPingPong(6)).to.equal("ping");
  });
  it("returns false for a number not divisible by 3, 5, or 15", function() {
    expect(isPingPong(7)).to.equal(false);
  });
});
