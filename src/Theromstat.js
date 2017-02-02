'use strict';

function Thermostat() {
  this._degrees = 20;
  this._powerSaving = true;
}

Thermostat.MIN_TEMP = 10;
Thermostat.MAX_TEMP_SAVINGS = 25;
Thermostat.MAX_TEMP_FULL = 32;
Thermostat.DEFAULT_TEMP = 20;

// PUBLIC

Thermostat.prototype.getDegrees = function() {
  return this._degrees;
};

Thermostat.prototype.switchPowerSaving = function() {
  this._powerSaving = !(this._powerSaving);
};

Thermostat.prototype.up = function(number) {
  var newTemp = Math.min(this.getDegrees() + number, this._setMaxTemp());
  this._setDegrees(newTemp);
};

Thermostat.prototype.down = function(number) {
  var newTemp = Math.max(this.getDegrees() - number, Thermostat.MIN_TEMP);
  this._setDegrees(newTemp);
};

Thermostat.prototype.reset = function(){
  this._setDegrees(Thermostat.DEFAULT_TEMP);
};

// PRIVATE

Thermostat.prototype._setDegrees = function(number) {
  this._degrees = number;
};

Thermostat.prototype._setMaxTemp = function() {
  return (this._powerSaving) ? Thermostat.MAX_TEMP_SAVINGS : Thermostat.MAX_TEMP_FULL;
};
