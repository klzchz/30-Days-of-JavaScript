/**
 * Leetcode 2629 - Function Composition
 *
 * Dado um array de funções [f1, f2, f3, ..., fn], retorne uma nova função `fn` que represente
 * a composição dessas funções, ou seja:
 *
 * compose([f, g, h])(x) => f(g(h(x)))
 *
 * - A composição deve ser feita da direita para a esquerda.
 * - Se o array estiver vazio, a função resultante deve retornar o valor de entrada.
 */

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        let result = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    };
};

// -----------------------------
// ✅ Test cases
// -----------------------------

// Exemplo 1
const fn1 = compose([
    x => x + 1,
    x => x * x,
    x => 2 * x
]);
console.log(fn1(4)); // 65

// Exemplo 2
const fn2 = compose([
    x => 10 * x,
    x => 10 * x,
    x => 10 * x
]);
console.log(fn2(1)); // 1000

// Exemplo 3 - array vazio
const fn3 = compose([]);
console.log(fn3(42)); // 42

// Exemplo 4 - só uma função
const fn4 = compose([x => x * 5]);
console.log(fn4(7)); // 35

// Exemplo 5 - múltiplas operações
const fn5 = compose([
    x => x - 3,
    x => x * 2,
    x => x + 10
]);
console.log(fn5(5)); // (5 + 10) * 2 - 3 = 27
