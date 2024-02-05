const { getArtifactJson } = require('./utils');
const { signer, getContract } = require('./web3wrapper');

async function deploy(contractName, args = []) {
    const artifactJSON = getArtifactJson(contractName);
    const contract = getContract(contractName);

    const result = await contract.deploy({
        data: artifactJSON.bytecode,
        arguments: args,
    }).send({ from: signer.address });

    console.log(result);
}

module.exports = deploy;