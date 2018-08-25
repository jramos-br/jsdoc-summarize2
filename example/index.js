/**
 * This module is an example of the jsdoc-summarize2 usage.
 *
 * @copyright (C) 2018 Jorge Ramos {@link https://github.com/jramos-br}
 *
 * @license MIT. This program is free software, licensed under the terms of the
 * MIT License as published by the Open Source Initiative. It is distributed in
 * the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the
 * implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the file LICENSE for more details. If you don't find it, please see the
 * MIT License template at {@link http://opensource.org/licenses/MIT}.
 *
 * @author Jorge Ramos <jramos@pobox.com>
 *
 * @module example
 */

'use strict';

/**
 * @summary Negates a number.
 *
 * @param {number} x The number to be negated.
 *
 * @returns {number} The negated value of x.
 */
exports.neg = function(x) {
  return -x;
};

/**
 * @summary Adds two numbers.
 *
 * @param {number} x The first addend.
 * @param {number} y The second addend.
 *
 * @description x and y must be non-negative numbers.
 *
 * @returns {number} The sum of x and y.
 */
exports.add = function(x, y) {
  if (x < 0) throw new RangeError('x is invalid');
  if (y < 0) throw new RangeError('y is invalid');
  return x + y;
};

/**
 * Multiplies two numbers.
 *
 * @param {number} x The multiplicand.
 * @param {number} y The multiplier.
 *
 * @returns {number} The value of x times y.
 */
exports.mul = function(x, y) {
  return x * y;
};

/**
 * Divides two numbers.
 *
 * @param {number} x The dividend.
 * @param {number} y The divisor.
 *
 * @returns {number} The value of x divided by y.
 *
 * @description y cannot be close to zero.
 */
exports.div = function(x, y) {
  if (Math.abs(y) < Number.EPSILON) throw new RangeError('y is invalid');
  return x / y;
};

/**
 * Adds two Fibonacci primes.
 *
 * @param {number} x The first addend.
 * @param {number} y The second addend.
 *
 * @returns {number} The sum of x and y.
 *
 * @description Sums two numbers only if both are Fibonacci primes.
 * Otherwise the function returns -1 to indicate an error.
 *
 * @description A Fibonacci prime is a Fibonacci number that is prime.
 *
 * @see https://en.wikipedia.org/wiki/Fibonacci_prime
 */
exports.sfp = function(x, y) {
  var seq = [2, 3, 5, 13, 89, 233, 1597, 28657, 514229, 433494437, 2971215073];
  var min = seq[0];
  var max = seq[seq.length - 1];
  if (x < min || x > max) throw new RangeError('x is invalid');
  if (y < min || y > max) throw new RangeError('y is invalid');
  var a = seq.find(function(v) { return v == x; });
  var b = seq.find(function(v) { return v == y; });
  return a && b ? a + b : -1;
};
