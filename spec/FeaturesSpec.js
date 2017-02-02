describe('Features', function() {
  // thermostat starts at 20 degrees

  var thermostat = new Thermostat();

  it('should start at 20 degrees', function() {
    expect(thermostat.getDegrees()).toEqual(20);
  });

});
