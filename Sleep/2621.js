/**
 * Leetcode 2621 - Sleep
 *
 * Crie uma função assíncrona `sleep(millis)` que retorne uma Promise resolvida após `millis` milissegundos.
 *
 * Exemplo:
 * let t = Date.now();
 * sleep(100).then(() => console.log(Date.now() - t)); // ~100
 *
 * A Promise pode resolver com qualquer valor, o foco é o tempo de espera.
 */

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
}

// -----------------------------
// ✅ Test cases
// -----------------------------

let t1 = Date.now();
sleep(100).then(() => console.log("Elapsed ~100ms:", Date.now() - t1));

let t2 = Date.now();
sleep(200).then(() => console.log("Elapsed ~200ms:", Date.now() - t2));
