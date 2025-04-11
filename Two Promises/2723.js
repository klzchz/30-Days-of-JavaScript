/**
 * Leetcode 2723 - Add Two Promises
 *
 * Dadas duas Promises `promise1` e `promise2`, retorne uma nova Promise
 * que resolve com a soma dos valores resolvidos de ambas.
 *
 * Exemplo:
 * addTwoPromises(Promise.resolve(2), Promise.resolve(3))
 *   .then(console.log); // 5
 */

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const [val1, val2] = await Promise.all([promise1, promise2]);
    return val1 + val2;
};

// -----------------------------
// ✅ Test cases
// -----------------------------

addTwoPromises(
    new Promise(res => setTimeout(() => res(2), 20)),
    new Promise(res => setTimeout(() => res(5), 60))
).then(console.log); // 7

addTwoPromises(
    new Promise(res => setTimeout(() => res(10), 50)),
    new Promise(res => setTimeout(() => res(-12), 30))
).then(console.log); // -2

addTwoPromises(
    Promise.resolve(2),
    Promise.resolve(2)
).then(console.log); // 4
