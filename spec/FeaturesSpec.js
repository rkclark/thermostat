describe('Features', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  // thermostat starts at 20 degrees

  it('should start at 20 degrees', function() {
    expect(thermostat.getDegrees()).toEqual(20);
  });

  // You can increase the temperature with an up function

  it('should increase temperature with an up function', function(){
    thermostat.up(3);
    expect(thermostat.getDegrees()).toEqual(23);
  });


});
