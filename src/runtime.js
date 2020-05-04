module.exports = {
    executionTime: function (callback) {
        let start = performance.now();

        callback;

        let end = performance.now();
        console.log(`Runtime: ${end - start}`);
    },
}