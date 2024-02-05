const { signer, getContract } = require('../web3wrapper');

async function execute(address) {
    const contract = getContract('TokenHack', address);

    const res = await contract.methods.hack(1000).send({ from: signer.address });
    console.log(res);
}

module.exports = execute;