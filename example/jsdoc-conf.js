'use strict';

module.exports = {
  plugins: [
    '../index.js'
  ],
  recurseDepth: 10,
  source: {
    includePattern: '.+\\.js(doc|x)?$',
    excludePattern: '(^|\\/|\\\\)_'
  },
  sourceType: 'module',
  tags: {
    allowUnknownTags: true,
    dictionaries: [
      'jsdoc',
      'closure'
    ]
  },
  templates: {
    cleverLinks: false,
    monospaceLinks: false
  }
};