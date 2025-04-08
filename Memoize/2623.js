/**
 * Leetcode 2623 - Memoize
 *
 * Dada uma função `fn`, retorne uma nova função memoizada.
 * A função memoizada:
 * - Salva os resultados com base nos argumentos.
 * - Se for chamada novamente com os mesmos argumentos, retorna o valor armazenado sem chamar `fn` de novo.
 *
 * Exemplo:
 * const sum = (a, b) => a + b;
 * const memoizedSum = memoize(sum);
 * memoizedSum(2, 2); // 4, executa a função
 * memoizedSum(2, 2); // 4, retorna do cache
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        cache[key] = fn(...args);
        return cache[key];
    };
}

// -----------------------------
// ✅ Test cases
// -----------------------------

let callCount = 0;
const sum = (a, b) => {
    callCount++;
    return a + b;
};

const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 2)); // 4, callCount = 1
console.log(memoizedSum(2, 2)); // 4, callCount still = 1 (cached)
console.log(memoizedSum(1, 2)); // 3, callCount = 2
console.log(memoizedSum(1, 2)); // 3, callCount still = 2 (cached)
console.log("Total calls to original fn:", callCount); // 2
