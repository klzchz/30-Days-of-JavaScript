/**
 * Leetcode 2715 - Timeout Cancellation
 *
 * Dada uma função `fn`, argumentos `args` e um tempo `t`,
 * retorne uma função `cancelFn` que, se chamada antes de `t`, cancela a execução de `fn`.
 *
 * Se `cancelFn` não for chamada, `fn(...args)` deve ser executada após `t` ms.
 */

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    const timeoutId = setTimeout(() => {
        fn(...args);
    }, t);

    return function cancelFn() {
        clearTimeout(timeoutId);
    };
};

// -----------------------------
// ✅ Test cases
// -----------------------------

const result = [];

const fn1 = (x) => result.push({ time: Date.now() - start, returned: x * 5 });
const start = Date.now();
const cancel1 = cancellable(fn1, [2], 20);

setTimeout(cancel1, 50); // cancelamento tardio — fn já foi chamado
// Esperado: resultado conterá { time: ~20, returned: 10 }

setTimeout(() => console.log(result), 70);
