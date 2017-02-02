describe('Features', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  // thermostat starts at 20 degrees

  it('should start at 20 degrees', function() {
    expect(thermostat.getDegrees()).toEqual(20);
  });

  // you can increase the temperature with an up function

  it('should increase temperature with an up function', function(){
    thermostat.up(3);
    expect(thermostat.getDegrees()).toEqual(23);
  });

  // you can decrease the temperature with a down function

  it('should decrease temperature with a down function', function(){
    thermostat.down(3);
    expect(thermostat.getDegrees()).toEqual(17);
  });

  // The minimum temperature is 10 degrees

  it("The minimum temperature is 10 degrees", function(){
    thermostat.down(11);
    expect(thermostat.getDegrees()).toEqual(10);
  });

  // If power saving mode is on, the maximum temperature is 25 degrees

  it("should have a max temp of 25 degrees if power saving mode is on", function(){
    thermostat.up(6);
    expect(thermostat.getDegrees()).toEqual(25);
  });

});
