const { signer, getContract } = require('../web3wrapper');

/*
    function withdraw(uint _amount) public {
        if(balances[msg.sender] >= _amount) {
            (bool result,) = msg.sender.call{value:_amount}("");
            if(result) {
                _amount;
            }
            balances[msg.sender] -= _amount;
        }
    }
    
    문제에서 withdraw 함수는 balances[msg.sender] 에서 금액을 차감하기 이전에 송금을 먼저 하고있다.
    이렇게 하게되면 송금받은 측이 컨트랙트 일 경우 withdraw 함수를 재실행 할 수 있다.
    재실행된 함수는 또 다시 송금을 하게된다.
    
    이 문제에서 배운 것은 reentrancy 뿐 아니다.
    또 하나 알게된 사실은 call 을 통한 컨트랙트간 호출 시 얼마든지 revert 되어도 상관 없다는 것이다.
    
    사실 balances[msg.sender] -= _amount 에서 withdraw 함수의 call stack 이 하나 둘 씩 끝날 때 마다 해당 구문을 실행하는데,
    이미 0 이 되어버린 값에서 언더플로우가 발생하기 때문에 revert 가 발생하는 것이다.
    하지만 call 대상이 revert 되어도 자금 이동은 발생하기 때문에 문제가 안되는 것이다.
    
    call 대상이 revert 될 경우 error 를 bubbling 하여 원본 컨트랙트에게 전달하는 방법은 다음 링크에서 자세히 설명되어있다.
    https://yos.io/2022/07/16/bubbling-up-errors-in-solidity/
*/
async function execute(address) {
    const contract = getContract('ReentranceHack', address);

    await contract.methods.attack(address).send({
        from: signer.address,
        value: '1000000000000000',
    });
}

module.exports = execute;