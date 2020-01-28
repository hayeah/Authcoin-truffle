# Authcoin-truffle
1. Set gas limit to 9612388 in ganache when creating the new workspace
https://prnt.sc/qmbi4s
2. When migrating the contracts, don't do it from develop console(truffle develop). Do it from truffle console(command: truffle console) or from outside of any console:
"truffle migrate".
Otherwise you'll receive out of gas error.

Commands after migrating the contracts:
let instance = await AuthCoin.deployed()
let accounts = await web3.eth.accounts
AuthCoin.deployed().then(instance=> console.log(instance.getEirCount()))
