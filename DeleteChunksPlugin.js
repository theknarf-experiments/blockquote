/*
 * Written by https://github.com/Hubro
 *  Posted at as a comment: https://github.com/DustinJackson/html-webpack-inline-source-plugin/issues/29
 */
const path = require('path'),
		fs = require('fs');

function DeleteChunksPlugin(config) {
    this.config = config;
    this.deleteFiles = [];

    if (this.config.chunks === undefined) this.config.chunks = [];
}

DeleteChunksPlugin.prototype.apply = function(compiler) {
    const self = this;

    compiler.plugin('emit', function(compilation, callback) {
        compilation.chunks.forEach(function(chunk) {
            if (self.config.chunks.indexOf(chunk.name) > -1) {
                chunk.files.forEach(function(file) {
                    self.deleteFiles.push(path.resolve('dist', file));
                });
            }
        });

        callback();
    });

    compiler.plugin('done', function() {
        self.deleteFiles.forEach(function(file) {
            console.log("Deleting inlined file", file);
            fs.unlink(file);
        });
    });
};

module.exports = DeleteChunksPlugin;
