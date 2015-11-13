describe('pingPong', function() {
  it("is false for a number that is not divisible by 3 or 5", function() {
    expect(pingPong(7)).to.equal(false);
  });
  it("will run pingPongType if isPingPong is true", function() {
    expect(pingPong(6)).to.equal("ping");
  });
});

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
  it("returns true for a number divisible by 3, 5, or 15", function() {
    expect(isPingPong(6)).to.equal(true);
  });
  it("returns false for a number not divisible by 3, 5, or 15", function() {
    expect(isPingPong(7)).to.equal(false);
  });
});
