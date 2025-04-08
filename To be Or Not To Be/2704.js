/**
 * Leetcode 2704 - To Be Or Not To Be
 *
 * Escreva uma função `expect` que ajuda desenvolvedores a testar valores.
 * Ela deve receber um valor `val` e retornar um objeto com dois métodos:
 *
 * - `toBe(val2)`: retorna `true` se `val === val2`, caso contrário lança erro `"Not Equal"`.
 * - `notToBe(val2)`: retorna `true` se `val !== val2`, caso contrário lança erro `"Equal"`.
 *
 * Exemplos:
 * expect(5).toBe(5);          // true
 * expect(5).toBe(null);       // throws "Not Equal"
 * expect(5).notToBe(null);    // true
 * expect(5).notToBe(5);       // throws "Equal"
 */

var expect = function(val) {
    return {
        toBe: function(otherVal) {
            if (val === otherVal) {
                return true;
            }
            throw "Not Equal";
        },
        notToBe: function(otherVal) {
            if (val !== otherVal) {
                return true;
            }
            throw "Equal";
        }
    };
};

// -----------------------------
// ✅ Test cases
// -----------------------------
// Teste 1: 
console.log(expect(5).toBe(5));
// Esperado: true


// Teste 2: 
console.log(expect(5).notToBe(5));
// Esperado: "Not Equal"
