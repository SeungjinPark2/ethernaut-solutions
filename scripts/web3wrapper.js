const { Web3 } = require('web3');
const { getArtifactJson } = require('./utils');
require('dotenv').config();

const wsRpc = process.env.WSRPC;
const _private = process.env.PRIVATE;

if (_private == null || wsRpc == null) {
    throw new Error('please specify environments: WSRPC, PRIVATE');
}

const web3 = new Web3(wsRpc);
web3.wallet.add(_private);

function getContract(contractName, address) {
    const artifactJSON = getArtifactJson(contractName);
    
    const contract = address != null ?
        new web3.eth.Contract(artifactJSON.abi, address)
        : new web3.eth.Contract(artifactJSON.abi);

    return contract;
}

module.exports = {
    web3,
    getContract,
    signer: web3.wallet.at(0),
};
