"use strict";
Number.prototype.round = function(decimalPlaces) {
  var a;
  if (decimalPlaces == null) {
    decimalPlaces = 0;
  }
  a = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000];
  if (decimalPlaces < 0) {
    decimalPlaces = 0;
  } else if (decimalPlaces > 10) {
    decimalPlaces = 10;
  }
  return Math.round(this * a[decimalPlaces]) / a[decimalPlaces];
};

Number.prototype.ceil = function() {
  return Math.ceil(this);
};

Number.prototype.abs = function() {
  return Math.abs(this);
};

Number.prototype.floor = function() {
  return Math.floor(this);
};

Number.prototype.pad = function(width, z) {
  var n;
  if (z == null) {
    z = '0';
  }
  n = this + '';
  if (n.length >= width) {
    return n;
  } else {
    return new Array(width - n.length + 1).join(z) + n;
  }
};
