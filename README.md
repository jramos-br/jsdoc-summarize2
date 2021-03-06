# The JSDoc Summarize2 Plugin

> A [JSDoc](https://npm.im/jsdoc) plugin to transform the first of the description tags
> into a summary tag.

<div align="center">
<img src="summarize2.png" width="320" heigth="80" center>

[![GitHub license](https://img.shields.io/github/license/jramos-br/jsdoc-summarize2.svg)](/LICENSE)
[![npm](https://img.shields.io/npm/v/jsdoc-summarize2.svg)](https://npm.im/jsdoc-summarize2)
[![node](https://img.shields.io/node/v/jsdoc-summarize2.svg)](/../../)

</div>

[Example](#example)<br/>
[Motivation](#motivation)<br/>
[Quick start](#quick-start)<br/>
[Usage](#usage)<br/>
[How to install](#how-to-install)<br/>
[How to uninstall](#how-to-uninstall)<br/>
[Version history](#version-history)<br/>
[Contributing](#contributing)<br/>
[License](#license)

##

[Summarize2](https://npm.im/jsdoc-summarize2) is a plugin for [JSDoc](https://npm.im/jsdoc),
which is a tool to generate HTML documentation from comment blocks added directly in
JavaScript source code.
A [JSDoc comment block](http://usejsdoc.org) looks like this:

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

The [Summarize2](https://npm.im/jsdoc-summarize2) plugin rewrites some tags of the comment
block according to a set of simple rules.
In short, when there is more than one description tag, the plugin transforms the first one
into a summary tag, if it doesn't already exist.

## Example

Here is a [JSDoc comment block](http://usejsdoc.org) of a simple function.

```js
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
```

When [JSDoc](https://npm.im/jsdoc) runs, [Summarize2](https://npm.im/jsdoc-summarize2)
changes the original comment block as follows:

- A summary tag is created from the first (untagged) description.
- The two other descriptions are combined into a single one.

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

The full example is in the [example](example) directory.
You can also see the HTML [page](http://htmlpreview.github.io/?https://github.com/jramos-br/jsdoc-summarize2/blob/master/example/out/module-example.html)
generated by [JSDoc](https://npm.im/jsdoc) as well as the markdown [document](example/api.md)
generated by [jsdoc-to-markdown](https://npm.im/jsdoc-to-markdown).

## Motivation

The [Visual Studio Code Intellisense](https://code.visualstudio.com/docs/languages/javascript#_intellisense)
uses [JSDoc](https://npm.im/jsdoc) tags to determine object types.
The absence of the summary tag lets the Intellisense output a little bit cleaner.
Also, sometimes it's good to create multiple paragraphs of description without markdown or
HTML embedded tags.
In essence, it's just a matter of taste.

Consider the following [JSDoc comment block](http://usejsdoc.org) with two description
tags.
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

The default behavior of [JSDoc](https://npm.im/jsdoc) is to use only the last description
in the comment block.
Previous descriptions, if any, are ignored.
Using the [Summarize2](https://npm.im/jsdoc-summarize2) plugin, you can write a comment
block like the one above and, during the [JSDoc](https://npm.im/jsdoc) run, the plugin
automatically transforms the first description into a summary.

## Quick start

1. Install the npm packages.
2. Create the [JSDoc configuration file](http://usejsdoc.org/about-configuring-jsdoc.html).
3. Generate the HTML documentation.

The following code samples use `path/to/file.js` to represent the source code file names.

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

Run [JSDoc](https://npm.im/jsdoc) with the `--configure ` or `-c`
[command line](http://usejsdoc.org/about-commandline.html) option to use the
[configuration file](http://usejsdoc.org/about-configuring-jsdoc.html)
prepared during the installation.
The installation instructions suggest the name `jsdoc-conf.json` for it.
The paths of the individual source code files must also be passed as
[command line](http://usejsdoc.org/about-commandline.html) arguments.

The following instructions use `index.js`, `module1.js` and `module2.js` as examples of
source code file names.
Additionally, they use the [npx](https://npm.im/npx) command to run [JSDoc](https://npm.im/jsdoc).
The command `npx jsdoc` is equivalent to `./node_modules/.bin/jsdoc` (with backslash on
Windows).
[npx](https://npm.im/npx) is available as of [npm@5.2.0](https://github.com/npm/npm/releases/tag/v5.2.0).

```
npx jsdoc -c jsdoc-conf.json index.js module1.js module2.js
```

If you prefer, use the `scripts` property in the `package.json` to define a command to
execute [JSDoc](https://npm.im/jsdoc) via [npm run](https://docs.npmjs.com/cli/run-script).

```json
"scripts": {
    "jsdoc": "jsdoc -c jsdoc-conf.json index.js module1.js module2.js"
},
```

Now you can run [JSDoc](https://npm.im/jsdoc) via [npm run](https://docs.npmjs.com/cli/run-script)
with the previously defined arguments.

```
npm run jsdoc
```

### Transformation rules

These are the rules used by [Summarize2](https://npm.im/jsdoc-summarize2) to process the
comment blocks.
The [example](example) directory contains the source code to demonstrate all cases.

- If the comment block already has a summary tag, nothing will change.

- A single description tag will not change.

- If there are two description tags in the comment block, the first one is transformed
  into a summary.

    ```
                      +---------------+
    @description +--> |    summary    |
                      +---------------+

                      +---------------+
    @description +--> |  description  |
                      +---------------+
    ```

- If there are more than two description tags in the comment block, the first one is
  transformed into a summary and the remaining are combined into a single description.

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

The following instructions [install](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
the packages locally.
If you prefer a global rather than a local install, please use `-g` instead of
`--save-dev`.

1. First you need to install [JSDoc](https://npm.im/jsdoc), if it's not already installed.

    ```
    npm install --save-dev jsdoc
    ```

2. Then you should install [Summarize2](https://npm.im/jsdoc-summarize2). The package name
   is jsdoc-summarize2.

    ```
    npm install --save-dev jsdoc-summarize2
    ```

3. Next you need to tell [JSDoc](https://npm.im/jsdoc) to enable the [Summarize2](https://npm.im/jsdoc-summarize2)
   plugin.
   You do this by creating a [JSDoc configuration file](http://usejsdoc.org/about-configuring-jsdoc.html)
   with the appropriate parameters.
   When you later run [JSDoc](https://npm.im/jsdoc), you must tell it to use the prepared
   [configuration file](http://usejsdoc.org/about-configuring-jsdoc.html).

   The `plugins` property in the [JSDoc configuration file](http://usejsdoc.org/about-configuring-jsdoc.html)
   must include a [Summarize2](https://npm.im/jsdoc-summarize2) plugin reference, as
   follows:

    ```json
    "plugins": [
        "jsdoc-summarize2"
    ],
    ```

   If needed, you can create a [JSDoc configuration file](http://usejsdoc.org/about-configuring-jsdoc.html)
   from scratch in the target project directory (the project you want to document).
   The suggested name is `jsdoc-conf.json`. You can copy the contents from the following
   example:

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

The following instructions [uninstall](https://docs.npmjs.com/getting-started/uninstalling-local-packages)
the locally installed packages.
If you did a global rather than a local install, please use `-g` instead of `--save-dev`.

To uninstall [Summarize2](https://npm.im/jsdoc-summarize2):

1. Remove the [Summarize2](https://npm.im/jsdoc-summarize2) plugin reference from the
   `plugins` property in the [JSDoc configuration file](http://usejsdoc.org/about-configuring-jsdoc.html).
   The installation instructions suggest the name `jsdoc-conf.json` for it.

    ```diff
     "plugins": [
    -    "jsdoc-summarize2"
     ],
    ```

2. Uninstall [Summarize2](https://npm.im/jsdoc-summarize2).

    ```
    npm uninstall --save-dev jsdoc-summarize2
    ```

If you want to uninstall [JSDoc](https://npm.im/jsdoc) also:

1. If you changed the `scripts` property in the `package.json` to define a command to
   execute [JSDoc](https://npm.im/jsdoc) via `npm run`, then remove that command
   definition.

    ```diff
     "scripts": {
    -    "jsdoc": "jsdoc -c jsdoc-conf.json index.js module1.js module2.js"
     },
    ```

2. Delete the [JSDoc configuration file](http://usejsdoc.org/about-configuring-jsdoc.html).
   The installation instructions suggest the name `jsdoc-conf.json` for it.

    ```
    rm jsdoc-conf.json (Unix)

    del jsdoc-conf.json (Windows)
    ```

3. Uninstall [JSDoc](https://npm.im/jsdoc).

    ```
    npm uninstall --save-dev jsdoc
    ```

## Version history

The file [NEWS.md](/NEWS.md) provides a high-level summary of the changes in each release.
Users are advised to review the change history before switching to a new version of the
package.

The file [CHANGELOG.md](/CHANGELOG.md) contains a list of changes committed to the source
control.
Developers can read the commit history to help them when investigating bugs, conceptual
inconsistencies and other issues.

## Contributing

Your contributions are welcome!
Have a look at the contribution guidelines in the file [CONTRIBUTING.md](/CONTRIBUTING.md).

## License

The [Summarize2](https://npm.im/jsdoc-summarize2) plugin is free software, licensed under
the terms of the MIT License as published by the [Open Source Initiative](http://opensource.org).
It is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
See the file [LICENSE](/LICENSE) for more details.
If you don't find it, please see the MIT License template at http://opensource.org/licenses/MIT.

Copyright (C) 2018 Jorge Ramos https://github.com/jramos-br
