describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it('has an inflight status', function() {
    expect(plane.inflight).toBe(false);
  });

  it('changes inflight status to false', function() {
    plane.landed();
    expect(plane.inflight).toBe(false);
  });

  it('changes inflight status to true', function(){
    plane.takenoff();
    expect(plane.inflight).toBe(true);
  });

});
