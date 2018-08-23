/**
 * This module is only an example of the jsdoc-summarize2 usage.
 *
 * @copyright (C) 2018 Jorge Ramos {@link https://github.com/jramos-br}
 *
 * @license MIT. This program is free software, licensed under the terms of the MIT
 * License as published by the Open Source Initiative. It is distributed in the hope
 * that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the file LICENSE for more details. If you don't find it, please see the
 * MIT License template at {@link http://opensource.org/licenses/MIT}.
 *
 * @author Jorge Ramos <jramos@pobox.com>
 *
 * @module example
 */

'use strict';

/**
 * A function to add two Fibonacci primes.
 *
 * @param {number} first The first number to add.
 * @param {number} second The second number to add.
 *
 * @returns {number} The sum of `first` and `second` numbers.
 *
 * @description Sums two numbers only if both are Fibonacci primes. Otherwise
 * the function returns -1 to indicate an error.
 *
 * @description A Fibonacci prime is a Fibonacci number that is prime.
 *
 * @see https://en.wikipedia.org/wiki/Fibonacci_prime
 */
exports.sumfp = function(first, second) {
  var seq = [2, 3, 5, 13, 89, 233, 1597, 28657, 514229, 433494437, 2971215073];
  var min = seq[0];
  var max = seq[seq.length - 1];
  if (first < min || first > max) throw new RangeError('first is invalid');
  if (second < min || second > max) throw new RangeError('second is invalid');
  var a = seq.find(function(v) { return v == first; });
  var b = seq.find(function(v) { return v == second; });
  return a && b ? a + b : -1;
};
