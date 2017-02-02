'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('should have a property for degrees', function() {
    expect(thermostat._degrees).toBeDefined();
  });

  it('should have a property for power saving', function() {
    expect(thermostat._powerSaving).toBeDefined();
  })

  describe('#getDegrees', function() {
    it('should have a function getDegrees', function() {
      expect(thermostat.getDegrees()).toEqual(20);
    });
  });

  describe('#switchPowerSaving', function() {
    it('should have a function switchPowerSaving', function() {
      thermostat.switchPowerSaving();
      expect(thermostat._powerSaving).toEqual(false);
    });
  });

  describe("#up", function(){
    it('should increase temperature with an up function', function(){
      thermostat.up(3);
      expect(thermostat.getDegrees()).toEqual(23);
    });

    it('should have a limit of 25 degrees with power saving', function(){
      thermostat.up(6);
      expect(thermostat.getDegrees()).toEqual(25);
    });
  });

  describe("#down", function(){
    it('should decrease temperature with a down function', function(){
      thermostat.down(3);
      expect(thermostat.getDegrees()).toEqual(17);
    });

    it("The minimum temperature is 10 degrees", function(){
      thermostat.down(11);
      expect(thermostat.getDegrees()).toEqual(10);
    });
  });

});
