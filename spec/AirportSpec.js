describe("Aiport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it("instruct plane to land", function() {
    expect(airport.land()).toBe("landing confirmed");
  });
});
