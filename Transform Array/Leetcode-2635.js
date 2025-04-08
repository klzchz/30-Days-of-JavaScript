/**
 * Leetcode 2635 - Apply Transform Over Each Element in Array
 *
 * Dado um array de inteiros `arr` e uma função de transformação `fn`,
 * retorne um novo array onde cada elemento é transformado por `fn`.
 *
 * A transformação deve ser aplicada como:
 *   newArr[i] = fn(arr[i], i)
 *
 * ❗ Não usar o método embutido Array.map().
 *
 * Exemplos:
 * map([1, 2, 3], x => x + 1)           => [2, 3, 4]
 * map([1, 2, 3], (x, i) => x + i)      => [1, 3, 5]
 * map([10, 20, 30], () => 42)          => [42, 42, 42]
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i], i));
    }
    return res;
};

// -----------------------------
// ✅ Test cases
// -----------------------------

// Exemplo 1
const plusOne = n => n + 1;
console.log(map([1, 2, 3], plusOne)); // [2, 3, 4]

// Exemplo 2
const plusIndex = (n, i) => n + i;
console.log(map([1, 2, 3], plusIndex)); // [1, 3, 5]

// Exemplo 3
const always42 = () => 42;
console.log(map([10, 20, 30], always42)); // [42, 42, 42]

// Exemplo 4 - identidade
console.log(map([7, 8, 9], (v) => v)); // [7, 8, 9]

// Exemplo 5 - multiplicação pelo índice
console.log(map([2, 4, 6], (v, i) => v * i)); // [0, 4, 12]
