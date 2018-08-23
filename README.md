# The JsDoc Summarize2 Plugin

This is a plugin for [JsDoc](http://usejsdoc.org/) which is a tool to generate HTML documentation from comment blocks. JsDoc will scan your code files looking for comment blocks then generate a nicely formated HTML document.

When there is more than one description tag, the plug-in transforms the first into a summary tag. When there are more than two description tags, the remaining tags are combined into a single description.

## Motivation

It's just a matter of taste. The Visual Studio Code Intellisense uses JsDoc tags to determine object types. The absence of @summary just let the Intellisense output more cleaner. Besides that, sometimes is good to create multiple paragraphs of description without markdown.

## How to install

First you need to install [JsDoc](http://usejsdoc.org/)
```
npm install --save-dev jsdoc
```

Then you need to install jsdoc-summarize2
```
npm install --save-dev jsdoc-summarize2
```

Next you need to tell [JsDoc](http://usejsdoc.org/) to enable the plugin.

You can do this by adding a `jsdoc.conf` file and telling [JsDoc](http://usejsdoc.org/) to use it when you run it.

**Example jsdoc-conf.json**
```
{
    "plugins": [
        "jsdoc-summarize2"
    ],
    "recurseDepth": 10,
    "source": {
        "includePattern": ".+\\.js(doc|x)?$",
        "excludePattern": "(^|\\/|\\\\)_"
    },
    "sourceType": "module",
    "tags": {
        "allowUnknownTags": true,
        "dictionaries": [
            "jsdoc",
            "closure"
        ]
    },
    "templates": {
        "cleverLinks": false,
        "monospaceLinks": false
    }
}
```

Now run [JsDoc](http://usejsdoc.org/) with the `--configure ` or `-c` option.
```
./node_modules/.bin/jsdoc -c jsdoc-conf.json
```

Alternatively, you can use the `scripts` entry in the current `package.json` to define a command to execute via` npm run`, as in the following example.
```
"scripts": {
    "jsdoc": "jsdoc -c jsdoc-conf.json index.js module1.js module2.js"
},
```

Now you can run [JsDoc](http://usejsdoc.org/) with the command:
```
npm run jsdoc
```


## Example

This is a simple function documentation using JsDoc tags.
```js
/**
 * A function to add two Fibonacci primes.
 *
 * @param {number} first The first number to add.
 * @param {number} second The second number to add.
 *
 * @returns {number} The sum of `first` and `second` numbers.
 *
 * @description Sums two numbers only if both are Fibonacci primes.
 * Otherwise the function returns -1 to indicate an error.
 *
 * @description A Fibonacci prime is a Fibonacci number that is prime.
 *
 * @see https://en.wikipedia.org/wiki/Fibonacci_prime
 */
```

The plugin will change the doclet into the following.
```js
/**
 * @summary A function to add two Fibonacci primes.
 *
 * @param {number} first The first number to add.
 * @param {number} second The second number to add.
 *
 * @returns {number} The sum of `first` and `second` numbers.
 *
 * @description Sums two numbers only if both are Fibonacci primes.
 * Otherwise the function returns -1 to indicate an error.<br/>
 * A Fibonacci prime is a Fibonacci number that is prime.
 *
 * @see https://en.wikipedia.org/wiki/Fibonacci_prime
 */
```

You can see the generated HTML [here](example/out/module-example.html).

The complete example is in [example](example) directory.

## License

This repository contains free software, licensed under the terms of the
[MIT License](http://opensource.org/licenses/MIT) as published by the
[Open Source Initiative](http://opensource.org).

See the file [LICENSE](LICENSE) for more details.
