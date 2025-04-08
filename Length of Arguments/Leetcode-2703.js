/**
 * Leetcode 2703 - Return Length of Arguments Passed
 *
 * Escreva uma função `argumentsLength` que retorna a quantidade de argumentos passados.
 *
 * Exemplos:
 * argumentsLength(5);                   // 1
 * argumentsLength({}, null, "3");       // 3
 *
 * ❗ Use rest operator (...args)
 */

/**
 * @param {...any} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
};

// -----------------------------
// ✅ Test cases
// -----------------------------

console.log(argumentsLength(5));                   // 1
console.log(argumentsLength({}, null, "3"));       // 3
console.log(argumentsLength());                    // 0
console.log(argumentsLength(1, 2, 3, 4, 5));        // 5
console.log(argumentsLength([1, 2], { a: 1 }, 9));  // 3
