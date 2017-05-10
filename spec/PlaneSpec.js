describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it('has an inflight status', function() {
    expect(plane.inflight).toBe(true);
  });

  it('changes inflight status to false', function() {
    plane.landed();
    expect(plane.inflight).toBe(false);
  });

});
