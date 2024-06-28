const { getArtifactJson } = require('./utils');
const { signer, getContract } = require('./web3wrapper');

async function deploy(contractName, args = []) {
    const artifactJSON = getArtifactJson(contractName);
    const contract = getContract(contractName);

    let result;

    try {
        result = await contract.deploy({
            data: artifactJSON.bytecode,
            arguments: args,
        }).send({ from: signer.address });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }

    console.log(result);
}

module.exports = deploy;
