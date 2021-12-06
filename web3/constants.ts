export const SUPPORTED_NETWORKS: {
  [chainId: number]: {
    chainId: number;
    name: string;
    symbol: string;
    explorer: string;
    rpc: string;
  };
} = {
  1: {
    chainId: 1,
    name: 'Mainnet',
    symbol: 'ETH',
    explorer: 'https://etherscan.io/',
    rpc: 'https://mainnet.infura.io/v3/e039ebf983d0477ca69a543b1c62101a',
  },
  4: {
    chainId: 4,
    name: 'Rinkeby',
    symbol: 'ETH',
    explorer: 'https://rinkeby.etherscan.io/',
    rpc: 'https://rinkeby.infura.io/v3/e039ebf983d0477ca69a543b1c62101a',
  },
};

export const AUTO_UPDATE_BALANCE_INTERVAL = 1000 * 5; // 15 seconds
export const DEFAULT_NETWORK = 4;
