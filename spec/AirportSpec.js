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

  it("instruct a plane to take off", function() {
    airport.land(plane);
    expect(airport.takeoff()).toBe('take off confirmed');
  });

  it("checks plane has left the hangar and is in flight", function(){
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport.hangar).not.toContain(plane);
  });

  it("prevents takeoff when weather is stormy",function (){
    airport.land(plane);
    expect( function(){ airport.takeoff(plane); }).toThrow(new Error('Unsafe to fly'));
  });


});
