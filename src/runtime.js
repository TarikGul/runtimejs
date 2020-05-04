const { performance } = require('perf_hooks');

module.exports = {
    executionTime: function (callback) {
        let start = performance.now();

        callback;

        let end = performance.now();
        console.log(`Runtime: ${end - start}ms`);
    },
}