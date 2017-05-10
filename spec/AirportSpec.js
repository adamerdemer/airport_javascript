describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("instruct plane to land", function() {
    airport.land(plane);
    expect(airport.hangar).toContain(plane);
  });

  it("instruct plane to land", function() {
    expect(airport.land()).toBe('landing confirmed');
  });

});
