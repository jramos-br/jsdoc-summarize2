<a name="module_example"></a>

## example
**Description**: This module is an example of the jsdoc-summarize2 usage.

**Author**: Jorge Ramos <jramos@pobox.com>  
**License**: MIT. This program is free software, licensed under the terms of theMIT License as published by the Open Source Initiative. It is distributed inthe hope that it will be useful, but WITHOUT ANY WARRANTY; without even theimplied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the file LICENSE for more details. If you don&#x27;t find it, please see theMIT License template at [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT).  
**Copyright**: (C) 2018 Jorge Ramos [https://github.com/jramos-br](https://github.com/jramos-br)  

* [example](#module_example)
    * [.neg(x)](#module_example.neg) ⇒ <code>number</code>
    * [.add(x, y)](#module_example.add) ⇒ <code>number</code>
    * [.mul(x, y)](#module_example.mul) ⇒ <code>number</code>
    * [.div(x, y)](#module_example.div) ⇒ <code>number</code>
    * [.sfp(x, y)](#module_example.sfp) ⇒ <code>number</code>

<a name="module_example.neg"></a>

### example.neg(x) ⇒ <code>number</code>
**Kind**: static method of [<code>example</code>](#module_example)  
**Summary**: Negates a number.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The number to be negated. |

**Returns**: <code>number</code> - The negated value of x.  
<a name="module_example.add"></a>

### example.add(x, y) ⇒ <code>number</code>
**Kind**: static method of [<code>example</code>](#module_example)  
**Summary**: Adds two numbers.  
**Description**: x and y must be non-negative numbers.


| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The first addend. |
| y | <code>number</code> | The second addend. |

**Returns**: <code>number</code> - The sum of x and y.  
<a name="module_example.mul"></a>

### example.mul(x, y) ⇒ <code>number</code>
**Kind**: static method of [<code>example</code>](#module_example)  
**Description**: Multiplies two numbers.


| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The multiplicand. |
| y | <code>number</code> | The multiplier. |

**Returns**: <code>number</code> - The value of x times y.  
<a name="module_example.div"></a>

### example.div(x, y) ⇒ <code>number</code>
**Kind**: static method of [<code>example</code>](#module_example)  
**Summary**: Divides two numbers.  
**Description**: y cannot be close to zero.


| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The dividend. |
| y | <code>number</code> | The divisor. |

**Returns**: <code>number</code> - The value of x divided by y.  
<a name="module_example.sfp"></a>

### example.sfp(x, y) ⇒ <code>number</code>
**Kind**: static method of [<code>example</code>](#module_example)  
**Summary**: Adds two Fibonacci primes.  
**Description**: Sums two numbers only if both are Fibonacci primes. Otherwisethe function returns -1 to indicate an error.<br/>A Fibonacci prime is a Fibonacci number that is prime.


| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The first addend. |
| y | <code>number</code> | The second addend. |

**Returns**: <code>number</code> - The sum of x and y.  
**See**: https://en.wikipedia.org/wiki/Fibonacci_prime  
