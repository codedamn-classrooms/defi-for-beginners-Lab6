const Decentralized=artifacts.require('Decentralized');

contract('Decentralized',(accounts) => {

    it('Should deploy smart contract properly',async () => {
         const dec=await Decentralized.deployed();
         assert(dec.address !== '');
         
         
    });


    it('should transfer ether to another address', async() => {
        const dec=await Decentralized.deployed();
     
          const receiver_beforeBalance= await web3.eth.getBalance(accounts[1]);
          await dec.send(accounts[1],{ value: web3.utils.toWei('1', 'ether')});
          
          const receiver_afterBalance= await web3.eth.getBalance(accounts[1]);
          const finalBalance=web3.utils.toBN(receiver_afterBalance);
          const initialBalance= web3.utils.toBN(receiver_beforeBalance);
  
        const temp = finalBalance.sub(initialBalance)
        // console.log(Number(temp))
          assert(Number(temp)===1000000000000000000, "not transferred");
  
          
        });
});       