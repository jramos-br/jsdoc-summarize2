/**
 * This plugin creates a summary tag, if there is none and if exists more than one
 * description tag. The content of the first description tag is moved to the summary.
 * Other description tags are combined into a single description.
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
 * @module jsdoc-summarize2
 */

'use strict';

exports.defineTags = function(dictionary) {
  var description = dictionary.lookUp('description');
  var onDescription = description.onTagged;
  description.onTagged = function(doclet, tag) {
    if (doclet.description) {
      if (doclet.summary) {
        if (tag.value) {
          tag.value = doclet.description + '<br/>' + tag.value;
        } else {
          tag.value = doclet.description;
        }
      } else {
        doclet.summary = doclet.description;
      }
      doclet.description = undefined;
    }
    if (onDescription) {
      onDescription(doclet, tag);
    }
  };
};
