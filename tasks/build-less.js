const taskFn = require('./snippets/rev-replacer')();

module.exports = taskFn;
taskFn.deps = ['compile-less'];
