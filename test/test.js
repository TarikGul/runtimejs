const { performance } = require('perf_hooks');

module.exports = {
    memoryUsage: function(callback) {
        callback;
        const used = process.memoryUsage();
        for (let key in used) {
            console.log(`Memory(${key}): ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
        }
    },
    executionTime: function(callback) {
        let start = performance.now();

        callback;

        let end = performance.now();
        console.log(`Runtime: ${end - start}`);
    },
}
