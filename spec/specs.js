describe('pingPong', function() {
  it("is true for a number that is divisible by 3", function() {
    expect(pingPong(6)).to.equal(true);
  });
  it("is true for a number that is divisible by 5", function() {
    expect(pingPong(10)).to.equal(true);
  });
  it("is false for a number that is not divisible by 3 or 5", function() {
    expect(pingPong(8)).to.equal(false);
  });
});