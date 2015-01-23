# Number prototype

Augments the built-in number type with a few helpful additions (round, ceil, floor, abs pad)

Usage
-------------------

`Number.prototpye.round(decimalPlaces)`
Round a number to `decimalPlaces`, eg `Math.PI.round(2) = 3.14`. Where `0 <= decimalPlaces <= 10`

`Number.prototype.ceil`
Shortcut for `Math.ceil`

`Number.prototype.abs`
Shortcut for `Math.abs`

`Number.prototype.floor`
Shortcut for `Math.floor`

`Number.prototype.pad(width, character='0')`
Left pads the number with `character` so that the string-length in decimal with equal `width`

