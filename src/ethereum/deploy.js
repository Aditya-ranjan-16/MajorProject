const { Web3 } = require('web3');
const fs = require('fs');
const HDWalletProvider = require('@truffle/hdwallet-provider');

const providerContractJSON = require('./build/ProviderContract.json');
const producerContractJSON = require('./build/ProducerContract.json');
const processorContractJSON = require('./build/ProcessorContract.json');
const distributorContractJSON = require('./build/DistributorContract.json');
const retailerContractJSON = require('./build/RetailerContract.json');

const provider = new HDWalletProvider(
    "knee gesture convince spy other cry beauty upgrade neither slush earn park",
    "https://sepolia.infura.io/v3/046d93f812de47bc828c45b86d629c28"
);
const web3 = new Web3(provider)
const deployContracts = async () => {
    const accounts = await web3.eth.getAccounts();
  

    console.log("Attempting to deploy contracts from account", accounts[0]);
    //Provider Contract
    try{
       const result = await new web3.eth.Contract(providerContractJSON.abi)
       .deploy({ data: providerContractJSON.evm.bytecode.object ,arguments: ['Provider Name']})
       .send({ gas: "1400000", from: accounts[0] });
         console.log("ProviderContract deployed at", result.options.address);
     provider.engine.stop();
    }catch(e){
    console.log(e)
    }
    //Producer Contract
    try{
        const result2 = await new web3.eth.Contract(producerContractJSON.abi)
        .deploy({ data: producerContractJSON.evm.bytecode.object ,arguments: ['Producer Name']})
        .send({ gas: "1400000", from: accounts[0] });
          console.log("ProducerContract deployed at", result2.options.address);
      provider.engine.stop();
     }catch(e){
     console.log(e)
     }

     //Processor Contract
     try{
        const result3 = await new web3.eth.Contract(processorContractJSON.abi)
        .deploy({ data: processorContractJSON.evm.bytecode.object ,arguments:  ['Processor Name'] })
        .send({ gas: "1400000", from: accounts[0] });
          console.log("ProcessorContract deployed at", result3.options.address);
      provider.engine.stop();
     }catch(e){
     console.log(e)
     }

        //Distributor Contract

        try{
            const result4 = await new web3.eth.Contract(distributorContractJSON.abi)
            .deploy({ data: distributorContractJSON.evm.bytecode.object ,arguments: ['Distributor Name', 10]})
            .send({ gas: "1400000", from: accounts[0] });
              console.log("DistributorContract deployed at", result4.options.address);
          provider.engine.stop();
         }
            catch(e){
            console.log(e)
            }
    //Retailer Contract
    try{
        const result5 = await new web3.eth.Contract(retailerContractJSON.abi)
        .deploy({ data: retailerContractJSON.evm.bytecode.object ,arguments: ['Retailer Name']})
        .send({ gas: "1400000", from: accounts[0] });
          console.log("RetailerContract deployed at", result5.options.address);
      provider.engine.stop();
     }catch(e){
     console.log(e)
     }
};

deployContracts();

// async function test(){
//     const accounts = await web3.eth.getAccounts();
//     console.log(accounts);
// }
// test();