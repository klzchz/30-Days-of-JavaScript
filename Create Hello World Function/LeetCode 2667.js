/**
 * LeetCode 2667 - Create Hello World Function
 * 
 * Enunciado:
 * Escreva uma função chamada `createHelloWorld`.
 * Essa função deve retornar uma nova função que sempre retorna a string "Hello World".
 * 
 * Exemplo 1:
 * Input: args = []
 * Output: "Hello World"
 * Explicação:
 * const f = createHelloWorld();
 * f(); // "Hello World"
 * A função retornada por createHelloWorld deve sempre retornar "Hello World".
 * 
 * Exemplo 2:
 * Input: args = [{}, null, 42]
 * Output: "Hello World"
 * Explicação:
 * const f = createHelloWorld();
 * f({}, null, 42); // "Hello World"
 * Qualquer argumento pode ser passado para a função, mas ela sempre deve retornar "Hello World".
 * 
 * Restrições:
 * 0 <= args.length <= 10
 */

/**
 * @return {function}
 */
var createHelloWorld = function () {
    return function (...args) {
      return "Hello World";
    };
  };
  
  // Exemplo de uso:
  // const f = createHelloWorld();
  // console.log(f()); // "Hello World"
  