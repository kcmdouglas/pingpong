describe('pingPong', function() {
  it("returns true for a number that is divisible by 3", function() {
    expect(pingPong(6)).to.equal(true);
  });
  it("returns true for a number that is divisible by 5", function() {
    expect(pingPong(10)).to.equal(true);
  });
  it("returns true for a number that is divisible by 3 and 5", function() {
    expect(pingPong(30)).to.equal(true)
  });
  it("is false for a number that is not divisible by 3 or 5", function() {
    expect(pingPong(8)).to.equal(false);
  });
});
