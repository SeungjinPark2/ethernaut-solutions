const { signer, getContract } = require('../web3wrapper');

async function execute(address, targetAddress) {
    const contract = getContract('Building', address);
    console.log('#################Elevator#################');

    await contract.methods.attack(targetAddress).send({from: signer.address});

    console.log('done!!! go back to ethernaut and check the top is true in the contract.');
}

module.exports = execute;