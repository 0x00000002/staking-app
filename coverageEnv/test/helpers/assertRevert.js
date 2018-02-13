// export default async promise => {
//     try {
//             await promise
//             assert.fail('Expected revert not received')
//         } catch (error) {
//         const revertFound = error.message.search('revert') >= 0
//         assert(revertFound, `Expected "revert", got ${error} instead`)
//     }
// }
//
// module.exports = function (error) {
//     try {
//         assert.fail('Expected revert not received');
//     } catch (error) {
//         const revertFound = error.message.search('revert') >= 0;
//         assert(revertFound, `Expected "revert", got ${error} instead`);
//     }
// };
//
// //
//
module.exports = function(error) {
    assert.isAbove(error.message.search('revert'), -1, 'Error containing "revert" must be returned');
}