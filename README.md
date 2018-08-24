# The JSDoc Summarize2 Plugin

> A JSDoc plugin to transform the first of the description tags into a summary tag.

[![GitHub license](https://img.shields.io/github/license/jramos-br/jsdoc-summarize2.svg)](https://github.com/jramos-br/jsdoc-summarize2/blob/master/LICENSE)
[![node](https://img.shields.io/node/v/passport.svg)](https://www.npmjs.com/package/jsdoc-summarize2)
[![npm](https://img.shields.io/npm/v/jsdoc-summarize2.svg)](https://www.npmjs.com/package/jsdoc-summarize2)

[Example](#example)<br/>
[Motivation](#motivation)<br/>
[Quickstart](#quickstart)<br/>
[Usage](#usage)<br/>
[How to install](#how-to-install)<br/>
[How to uninstall](#how-to-uninstall)<br/>
[Contributing](#contributing)<br/>
[License](#license)<br/>

This is a plugin for JSDoc, which is a tool to generate HTML documentation from comment blocks in JavaScript files.
For more information about JSDoc, please visit http://usejsdoc.org.

A JSDoc comment block looks like this:

```js
/**
 * @summary A short description of a program element.
 *
 * @description A long and more or less detailed description of a program
 * element, usually spanning multiple lines and eventually with HTML and
 * markdown formatted text.
 */
```

The Summarize2 plugin changes some tags of the comment block according to a simple set of rules.
In short, when there is more than one description tag, the plugin changes the first one into a summary tag, if it doesn't already exist.

## Example

This is a JSDoc documentation comment block of a simple function.

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

When JSDoc runs, the plugin changes the original comment block as follows.

- A summary tag was created from the first (untagged) description.
- The two other descriptions were combined into a single one.

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

## Motivation

The [Visual Studio Code Intellisense](https://code.visualstudio.com/docs/languages/javascript#_intellisense) uses JSDoc tags to determine object types.
The absence of the summary tag lets the Intellisense output a little bit cleaner.
Besides that, sometimes it's good to create multiple paragraphs of description without markdown or HTML embedded tags.

Consider the following comment block with two description tags.
The first one is untagged and the second is tagged.

```js
/**
 * A short description of a program element.
 *
 * @description A long and more or less detailed description of a program
 * element, usually spanning multiple lines and eventually with HTML and
 * markdown formatted text.
 *
 * @type {string}
 */
```

The default behavior of JSDoc is to use only the last description in the comment block. Previous descriptions, if any, are ignored.
Using the Summarize2 plugin, you can write a comment block like above and the plugin automatically will change the first description into a summary.

## Quickstart

1. Install the npm packages.
2. Create the JSDoc configuration file.
3. Generate the HTML documentation.

For information about JSDoc command-line arguments, please visit http://usejsdoc.org/about-commandline.html.

### Unix

```
npm install --save-dev jsdoc
npm install --save-dev jsdoc-summarize2

cp ./node_modules/jsdoc-summarize2/example/jsdoc-conf.json .

./node_modules/.bin/jsdoc -c jsdoc-conf.json path/to/file.js
```

### Windows

```
npm install --save-dev jsdoc
npm install --save-dev jsdoc-summarize2

copy .\node_modules\jsdoc-summarize2\example\jsdoc-conf.json .

.\node_modules\.bin\jsdoc -c jsdoc-conf.json path/to/file.js
```

## Usage

Run JSDoc with the `--configure ` or `-c` command-line option to use the configuration file created or updated during the installation. Also, pass the paths of the individual source code files. The code samples below use `index.js`, `module1.js` and `module2.js` as source code file names.

```
./node_modules/.bin/jsdoc -c jsdoc-conf.json index.js module1.js module2.js
```

If you prefer, use the `scripts` property in the `package.json` to define a command to execute JSDoc via `npm run`.

```json
"scripts": {
    "jsdoc": "jsdoc -c jsdoc-conf.json index.js module1.js module2.js"
},
```

Now you can run JSDoc via `npm run`.

```
npm run jsdoc
```

For information about JSDoc command-line options, please visit http://usejsdoc.org/about-commandline.html.

For information about `npm run`, please visit https://docs.npmjs.com/cli/run-script.

### Transformation rules

These are the rules used by Summarize2 to process the comment blocks before the standard JSDoc handling.

- If the comment block already has a summary tag, nothing will change.

- A single description tag will not change.

- If there are two description tags in the comment block, the first one is changed into a summary.

    ```
                      +---------------+
    @description +--> |    summary    |
                      +---------------+

                      +---------------+
    @description +--> |  description  |
                      +---------------+
    ```

- If there are more than two description tags in the comment block, the first one is changed into a summary and the remaining are combined into a single description.

    ```
                      +---------------+
    @description +--> |    summary    |
                      +---------------+

                      +---------------+
    @description +--> | description 1 |
          +---------> | description 2 |
          |           +---------------+
          +
    @description
    ```

## How to install

The following instructions installs the packages locally.
If you prefer a global rather than a local install, please change `--save-dev` to `-g`.

1. First you need to install JSDoc, if it's not already installed.

    ```
    npm install --save-dev jsdoc
    ```

2. Then you should install Summarize2. The package name is jsdoc-summarize2.

    ```
    npm install --save-dev jsdoc-summarize2
    ```

3. Next you need to tell JSDoc to enable the Summarize2 plugin.
You do this by creating or changing a [JSDoc configuration file](http://usejsdoc.org/about-configuring-jsdoc.html).
When you later run JSdoc, you must tell it to use this configuration file.

    The `plugins` property in the JSDoc configuration file must include a Summarize2 plugin reference, as follows.

    ```json
    {
        "plugins": [
            "jsdoc-summarize2"
        ]
    }
    ```

    If needed, you can create a JSDoc configuration file from scratch in the project directory.
    The suggested name is `jsdoc-conf.json`. You can copy the contents from the following example.

    ```json
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

## How to uninstall

The following instructions are for locally installed packages.
If you did a global rather than a local install, please change `--save-dev` to `-g`.

To uninstall Summarize2:

1. Remove the Summarize2 plugin reference from the `plugins` property in the JSDoc configuration file.
The installation instructions suggested the name `jsdoc-conf.json` for it.

2. Uninstall Summarize2.

    ```
    npm uninstall --save-dev jsdoc-summarize2
    ```

If you also want to uninstall JSDoc:

1. If you changed the `scripts` property in the `package.json` to define a command to execute JSDoc via `npm run`, then remove that command definition.

2. Delete the JSDoc configuration file.
The installation instructions suggested the name `jsdoc-conf.json` for it.

3. Uninstall JSDoc.

    ```
    npm uninstall --save-dev jsdoc
    ```

## Contributing

For bugs and feature requests, please open an [issue](https://github.com/jramos-br/jsdoc-summarize2/issues).

## License

This repository contains free software, licensed under the terms of the MIT License as published by the [Open Source Initiative](http://opensource.org).

See the file [LICENSE](LICENSE) for details.

Copyright (C) 2018 Jorge Ramos https://github.com/jramos-br
