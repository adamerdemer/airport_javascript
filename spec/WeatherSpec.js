describe('Weather', function(){
  var weather;


  beforeEach(function() {
    weather = new Weather();
  });

  it('has a property called isStormy set to false by default', function(){
    expect(weather.isStormy).toBe(false);
  });

});
