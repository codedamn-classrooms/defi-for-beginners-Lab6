// add your test suite or use a template above
const Decentralized=artifacts.require('Decentralized');
const truffleAssert = require('truffle-assertions');

contract('Decentralized',(accounts) => {
  beforeEach(async () => {
    
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

        it("Sending amount less than 1eth should fail", async () => {
          // check if send function is working for normal case
         // const demo = await Wallet.deployed();
         const dec=await Decentralized.deployed();
          await truffleAssert.passes(
             dec.send(accounts[1],{value: web3.utils.toWei('2', 'ether')}),
             'Send function should be implemented correctly.'
          )
          // now check if it has require statement for amount less than 1 ether
          await truffleAssert.reverts(
             dec.send(accounts[1],{value: web3.utils.toWei('0.9', 'ether')}),
          )
          // now check if it can send 1 ether
          await truffleAssert.passes(
             dec.send(accounts[1], {value:web3.utils.toWei('1', 'ether')}),
          )
       });
});       