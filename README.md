# The JSDoc Summarize2 Plugin

This is a plugin for [JSDoc](http://usejsdoc.org), which is a tool to generate HTML documentation from comment blocks.
JSDoc will scan your code files looking for comment blocks then generate a nicely formated HTML site.

The JSDoc comment block looks like:
```js
/**
 * @summary A short description of a program element.
 *
 * @description A long and more or less detailed description of a program
 * element, usually spanning multiple lines and eventually with HTML and
 * markdown formatted text.
 * 
 * @type {string}
 */
```

For more information about JSDoc, please visit http://usejsdoc.org.

When there is more than one description tag, the plug-in transforms the first one into a summary tag.
When there are more than two description tags, the remaining tags are combined into a single description.

## Motivation

It's just a matter of taste.
The [Visual Studio Code Intellisense](https://code.visualstudio.com/docs/languages/javascript#_intellisense) uses JSDoc tags to determine object types.
The absence of the `@summary` tag just let the Intellisense output more cleaner.
Besides that, sometimes it's good to create multiple paragraphs of description without markdown or HTML embedded tags.

## How to install

First you need to install JSDoc.
```
npm install --save-dev jsdoc
```

Then you need to install jsdoc-summarize2.
```
npm install --save-dev jsdoc-summarize2
```

Next you need to tell JSDoc to enable the plugin.
You can do this by adding a [configuration file](http://usejsdoc.org/about-configuring-jsdoc.html) and telling JSDoc to use it when you run it.
You can create a configuration file in the project directory with the suggested name `jsdoc-conf.json` and copy the contents of the following example.

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

Now run JSDoc with the `--configure ` or `-c` command-line option.
```
./node_modules/.bin/jsdoc -c jsdoc-conf.json index.js module1.js module2.js
```

You can also use the `scripts` property, in the `package.json`, to define a command to execute JSDoc via `npm run`.
```
"scripts": {
    "jsdoc": "jsdoc -c jsdoc-conf.json index.js module1.js module2.js"
},
```

Now you can run JSDoc via `npm run`.
```
npm run jsdoc
```

For more information about JSDoc command-line options, please visit http://usejsdoc.org/about-commandline.html.

For more information about `npm run`, please visit https://docs.npmjs.com/cli/run-script.

## Example

This is a simple function documentation using JSDoc tags.
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

The plugin will change the original documentation as follows.
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

You can see the generated HTML [here](http://htmlpreview.github.io/?https://github.com/jramos-br/jsdoc-summarize2/blob/master/example/out/module-example.html).

The complete example is in the [example](example) directory.

## License

This repository contains free software, licensed under the terms of the
[MIT License](http://opensource.org/licenses/MIT) as published by the
[Open Source Initiative](http://opensource.org).

See the file [LICENSE](LICENSE) for details.
