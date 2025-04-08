/**
 * Leetcode 2637 - Promise Time Limit
 *
 * Dada uma função assíncrona `fn` e um tempo limite `t` em milissegundos,
 * retorne uma nova função que:
 * - resolve com o valor de `fn` SE a função for completada dentro do tempo limite
 * - rejeita com `"Time Limit Exceeded"` SE `fn` ultrapassar o tempo limite
 *
 * Exemplo:
 * const limited = timeLimit(fn, 100);
 * await limited(...args) → resultado ou erro
 */

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            const id = setTimeout(() => reject("Time Limit Exceeded"), t);

            fn(...args)
                .then((res) => resolve(res))
                .catch((err) => reject(err))
                .finally(() => clearTimeout(id));
        });
    };
};

// -----------------------------
// ✅ Test case oficial
// -----------------------------

const fn = async (n) => {
    await new Promise(res => setTimeout(res, 100));
    return n * n;
};

const limited = timeLimit(fn, 50);
const start = performance.now();

limited(5)
    .then(res => {
        console.log({ resolved: res, time: Math.floor(performance.now() - start) });
    })
    .catch(err => {
        console.log({ rejected: err, time: Math.floor(performance.now() - start) });
    });

// Esperado: { rejected: "Time Limit Exceeded", time: ~50 }
