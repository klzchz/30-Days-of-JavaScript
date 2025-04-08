/**
 * Leetcode 2666 - Allow One Function Call
 *
 * Dado uma função `fn`, retorne uma nova função que executa `fn` **apenas uma vez**.
 * - A primeira chamada deve executar e retornar `fn(...args)`
 * - As chamadas seguintes devem retornar `undefined`
 *
 * Exemplo:
 * const onceFn = once((a, b) => a + b);
 * onceFn(2, 3); // 5
 * onceFn(5, 6); // undefined
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;

    return function (...args) {
        if (!called) {
            called = true;
            return fn.apply(this, args);
        }
    };
};

// -----------------------------
// ✅ Test cases
// -----------------------------

// Exemplo 1
let add = (a, b, c) => a + b + c;
let onceAdd = once(add);
console.log(onceAdd(1, 2, 3)); // 6
console.log(onceAdd(2, 3, 6)); // undefined
console.log(onceAdd(10, 20, 30)); // undefined

// Exemplo 2
let multiply = (a, b, c) => a * b * c;
let onceMultiply = once(multiply);
console.log(onceMultiply(5, 7, 4)); // 140
console.log(onceMultiply(1, 1, 1)); // undefined
