const { performance } = require('perf_hooks');

module.exports = {
    executionTime: function (callback) {
        // This method is based on the machine you are running as well.
        // Therefore is not the most reliable way to find a system runtime.
        let start = performance.now();

        callback;

        let end = performance.now();
        console.log(`Runtime: ${end - start}ms`);
    },
    systemRuntime: function(clockTime) {
        let system = 0;

        let start = new Date().getTime();

        // Send to the event loop too see how heavy the load is on the CPU
        setTimeout(() => {
            let end = new Date().getTime();
            console.log('start:', start);
            console.log('end:', end);
            console.log('system runtime:', end - start, 'ms');
        }, 0)
        let end = start;

        while (end - start === 0) {
            end = new Date().getTime();
        }

        start = end;

        while (end - start < clockTime) {
            system++;
            end = new Date().getTime();
        }
        console.log(`clocktime: ${clockTime} ms`);
        console.log('system Iteration:', system);
    }
}