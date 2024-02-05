const { signer, getContract } = require('../web3wrapper');

async function execute(address) {
    const contract = getContract('CoinFlipHack', address);

    for (let i = 0; i < 2; i++) {
        await contract.methods.flip().send({ from: signer.address });

        await sleep(1000 * 10);
        console.log('done');
    }
}

module.exports = execute();