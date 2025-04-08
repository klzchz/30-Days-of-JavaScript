/**
 * Leetcode 2626 - Array Reduce Transformation
 *
 * Dado um array `nums`, uma função redutora `fn(accum, curr)` e um valor inicial `init`,
 * retorne o valor final após aplicar a função sequencialmente em todos os elementos.
 *
 * A lógica segue o padrão do reduce:
 *   val = fn(init, nums[0])
 *   val = fn(val, nums[1])
 *   ...
 *   return val
 *
 * ❗ Não usar Array.prototype.reduce()
 *
 * Exemplo:
 * reduce([1, 2, 3, 4], (a, b) => a + b, 0) => 10
 */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
};

// -----------------------------
// ✅ Test cases
// -----------------------------

// Exemplo 1
const sum = (acc, curr) => acc + curr;
console.log(reduce([1, 2, 3, 4], sum, 0)); // 10

// Exemplo 2
const multSum = (acc, curr) => acc + curr * curr;
console.log(reduce([1, 2, 3, 4], multSum, 100)); // 130

// Exemplo 3 - array vazio
console.log(reduce([], (acc, curr) => acc + curr, 25)); // 25

// Exemplo 4 - subtração
console.log(reduce([10, 5, 1], (acc, curr) => acc - curr, 20)); // 4

// Exemplo 5 - multiplicação simples
console.log(reduce([2, 3, 4], (a, b) => a * b, 1)); // 24
