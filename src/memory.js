module.exports = {
    memoryUsage: function(callback, options) {
        callback();
        const used = process.memoryUsage();
        for (let key in used) {
            console.log(`Memory(${key}): ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
        };
    },
}