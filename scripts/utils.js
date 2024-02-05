const path = require('node:path');

function getArtifactJson(contractName) {
    return require(path.resolve('build', 'contracts', `${contractName}.json`));
}

async function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    });
}

module.exports = {
    sleep,
    getArtifactJson,
}