module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 23889, // janus QTUM-ETH RPC bridge
      network_id: '*', // eslint-disable-line camelcase
      from: '0x7926223070547d2d15b2ef5e7383e541c338ffe9',
      gasPrice: '0x64', // minimal gas for qtum
    },
    live: {
      // provider: Web3.providers.HttpProvider("http://<host>:<port>"),
      network_id: 1,
      host: "127.0.0.1",
      port: 23889,
      // optional config values:
      gas: 200000,
      gasPrice: 0x28,
      from: "0x982fce9ecd065e3b29e0229d8cb2d31dd64a7666"
      // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
      //          - function that returns a web3 provider instance (see below.)
      //          - if specified, host and port are ignored.
      // skipDryRun: - true if you don't want to test run the migration locally before the actual migration (default is false)
      // timeoutBlocks: - if a transaction is not mined, keep waiting for this number of blocks (default is 50)
    }
  },
  compilers: {
    solc: {
      version: "0.4.17",
      settings: {
        evmVersion: "constantinople"
      }
    },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
