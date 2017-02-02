'use strict';

function Thermostat() {
  this._degrees = 20;
};

Thermostat.prototype.getDegrees = function() {
  return this._degrees;
};

Thermostat.prototype._setDegrees = function(number) {
  this._degrees = number;
};


Thermostat.prototype.up = function(number) {
  var newTemp = this.getDegrees() + number;
  this._setDegrees(newTemp);
};

Thermostat.prototype.down = function(number) {
  var newTemp = this.getDegrees() - number;
  this._setDegrees(newTemp);
};
