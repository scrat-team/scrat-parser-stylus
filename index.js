/*
 * scrat-parser-stylus
 */

'use strict';

var stylus = require('stylus');

module.exports = function(content, file, conf){
    var styl = stylus(content, conf);
    var deps = styl.deps();
    if(deps && deps.length){
        deps.forEach(function(path){
            file.cache.addDeps(path);
        });
    }
    return styl.render();
};