'use strict';

function Thermostat() {
  this._degrees = 20;
  this._powerSaving = true;
  this._MIN_TEMP = 10;
  this._MAX_TEMP_SAVINGS = 25;
}

Thermostat.prototype.getDegrees = function() {
  return this._degrees;
};

Thermostat.prototype._setDegrees = function(number) {
  this._degrees = number;
};

Thermostat.prototype.switchPowerSaving = function() {
  this._powerSaving = !(this._powerSaving);
};

Thermostat.prototype.up = function(number) {
  var newTemp = Math.min(this.getDegrees() + number, this._MAX_TEMP_SAVINGS);
  this._setDegrees(newTemp);
};

Thermostat.prototype.down = function(number) {
  var newTemp = Math.max(this.getDegrees() - number, this._MIN_TEMP);
  this._setDegrees(newTemp);
};
