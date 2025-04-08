/**
 * Leetcode 2620 - Counter
 *
 * Crie uma função `createCounter(init)` que retorna um objeto com os métodos:
 *
 * - `increment()` → incrementa o valor atual e retorna o novo valor
 * - `decrement()` → decrementa o valor atual e retorna o novo valor
 * - `reset()`     → reseta o valor para o valor inicial e retorna ele
 *
 * Exemplo:
 * const counter = createCounter(5);
 * counter.increment(); // 6
 * counter.decrement(); // 5
 * counter.reset();     // 5
 */

var createCounter = function(init) {
    let cValue = init;

    return {
        increment: () => ++init,
        decrement: () => --init,
        reset: () => {
            init = cValue;
            return init;
        }
    };
};

// -----------------------------
// ✅ Test cases
// -----------------------------

const counter1 = createCounter(5);
console.log(counter1.increment()); // 6
console.log(counter1.increment()); // 7
console.log(counter1.decrement()); // 6
console.log(counter1.reset());     // 5
console.log(counter1.decrement()); // 4

console.log('-----------------');

const counter2 = createCounter(0);
console.log(counter2.increment()); // 1
console.log(counter2.decrement()); // 0
console.log(counter2.decrement()); // -1
console.log(counter2.reset());     // 0
