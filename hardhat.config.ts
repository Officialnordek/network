import type { HardhatUserConfig, NetworkUserConfig } from "hardhat/types";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-abi-exporter";
import "dotenv/config";
import "@nomiclabs/hardhat-web3";
require("@nomiclabs/hardhat-truffle5");

const nordekMainnet: NetworkUserConfig = {
  url: 'https://mainnet-rpc.nordekscan.com',
  chainId: 81041,
  accounts: [process.env.KEY_MAINNET!],
};

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0, 
    },
    nordekMainnet,
  },
  etherscan: {
    apiKey: process.env.API_KEY!,
    customChains: [
      {
        network: "nordekMainnet",
        chainId: 81041,
        urls: {
          apiURL: 'https://nordekscan.com/api',
          browserURL: 'https://nordekscan.com',
        },
      }
    ],
  },
  solidity: {
    compilers: [
      {
        version: "0.4.26",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  mocha: {
    timeout: 100000000
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  abiExporter: {
    path: "./data/abi",
    clear: true,
    flat: false,
  },
};
export default config;
