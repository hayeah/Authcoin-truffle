module.exports = {
  networks: {
    development: {
      gas:8000000,
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    live: {
      // provider: Web3.providers.HttpProvider("http://<host>:<port>"),
      network_id: 1,
      host: "127.0.0.1",
      port: 23889,
      // optional config values:
      gas:200000,
      gasPrice:0x28,
      from: "0x982fce9ecd065e3b29e0229d8cb2d31dd64a7666"
      // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
      //          - function that returns a web3 provider instance (see below.)
      //          - if specified, host and port are ignored.
      // skipDryRun: - true if you don't want to test run the migration locally before the actual migration (default is false)
      // timeoutBlocks: - if a transaction is not mined, keep waiting for this number of blocks (default is 50)
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
