const { signer, getContract } = require('../web3wrapper');

async function execute(address) {
    const contract = getContract('TelephoneHack', address);

    const res = await contract.methods.Hack().send({ from: signer.address });
    console.log(res);
}

module.exports = execute;