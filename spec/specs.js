describe('pingPong', function() {
  it("returns ping for a number that is divisible by 3", function() {
    expect(pingPong(6)).to.equal("ping");
  });
  it("returns pong for a number that is divisible by 5", function() {
    expect(pingPong(10)).to.equal("pong");
  });
  it("returns ping pong for a number that is divisible by 3 and 5", function() {
    expect(pingPong(30)).to.equal("ping pong")
  });
  it("is false for a number that is not divisible by 3 or 5", function() {
    expect(pingPong(8)).to.equal(false);
  });
});
