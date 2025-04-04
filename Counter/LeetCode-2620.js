/**
 * LeetCode 2620 - Counter
 * 
 * Enunciado:
 * Dado um número inteiro `n`, retorne uma função `counter`.
 * 
 * Essa função `counter` deve retornar `n` na primeira vez que for chamada e,
 * nas chamadas subsequentes, retornar `n + 1`, `n + 2`, etc.
 * 
 * Exemplo 1:
 * Input: 
 * n = 10
 * calls = ["call","call","call"]
 * Output: [10,11,12]
 * 
 * Explicação:
 * const counter = createCounter(10);
 * counter(); // 10
 * counter(); // 11
 * counter(); // 12
 * 
 * Exemplo 2:
 * Input:
 * n = -2
 * calls = ["call","call","call","call","call"]
 * Output: [-2,-1,0,1,2]
 * 
 * Explicação:
 * counter() retorna inicialmente -2. Em cada chamada subsequente, retorna +1 do valor anterior.
 * 
 * Restrições:
 * -1000 <= n <= 1000
 * 0 <= calls.length <= 1000
 * calls[i] === "call"
 */

/**
 * @param {number} n
 * @return {function} counter
 */
var createCounter = function(n) {
    return function() {
      return n++;
    };
  };
  
  /**
   * Exemplo de uso:
   * const counter = createCounter(10);
   * console.log(counter()); // 10
   * console.log(counter()); // 11
   * console.log(counter()); // 12
   */
  