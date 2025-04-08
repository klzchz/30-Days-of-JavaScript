/**
 * Leetcode 2634 - Filter Elements from Array
 *
 * Dado um array de inteiros `arr` e uma função `fn`, retorne um novo array contendo apenas os elementos
 * para os quais `fn(arr[i], i)` retorna um valor truthy (booleanamente verdadeiro).
 *
 * Não usar Array.prototype.filter().
 *
 * Exemplo:
 * filter([0, 10, 20, 30], x => x > 10); // [20, 30]
 * filter([1, 2, 3], (x, i) => i === 0); // [1]
 * filter([-2, -1, 0, 1, 2], x => x + 1); // [-2, -1, 0, 1, 2]
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            res.push(arr[i]);
        }
    }
    return res;
};

// -----------------------------
// ✅ Test cases
// -----------------------------

// Exemplo 1
const greaterThan10 = n => n > 10;
console.log(filter([0, 10, 20, 30], greaterThan10)); // [20, 30]

// Exemplo 2
const firstIndex = (n, i) => i === 0;
console.log(filter([1, 2, 3], firstIndex)); // [1]

// Exemplo 3
const plusOne = n => n + 1;
console.log(filter([-2, -1, 0, 1, 2], plusOne)); // [-2, -1, 0, 1, 2]

// Exemplo 4 - números pares
console.log(filter([1, 2, 3, 4], n => n % 2 === 0)); // [2, 4]

// Exemplo 5 - índice ímpar
console.log(filter([10, 20, 30, 40, 50], (v, i) => i % 2 !== 0)); // [20, 40]
