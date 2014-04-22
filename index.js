/*
 * scrat-parser-stylus
 */

'use strict';

var stylus = require('stylus');

module.exports = function(content, file, conf){
    var style = stylus(content, conf);
    style.render(function(err, css){
        if (err) throw err;
        content = css;
    });
    return content;
};
