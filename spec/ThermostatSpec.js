'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('should have a property for degrees', function() {
    expect(thermostat._degrees).toBeDefined();
  });

  describe('#getDegrees', function() {
    it('should have a function getDegrees', function() {
      expect(thermostat.getDegrees()).toEqual(20);
    });
  });

  describe("#up", function(){
    it('should increase temperature with an up function', function(){
      thermostat.up(3);
      expect(thermostat.getDegrees()).toEqual(23);
    });    
  });

});
