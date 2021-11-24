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
    rpc: 'https://mainnet.infura.io/v3/f8a8e8f3f0e94b0c9b8d4c3c2b7a8d12',
  },
  4: {
    chainId: 4,
    name: 'Rinkeby',
    symbol: 'ETH',
    explorer: 'https://rinkeby.etherscan.io/',
    rpc: 'https://rinkeby.infura.io/v3/f8a8e8f3f0e94b0c9b8d4c3c2b7a8d12',
  },
  1337: {
    chainId: 1337,
    name: 'Hardhat',
    symbol: 'ETH',
    explorer: 'http://localhost:1234/',
    rpc: 'http://localhost:8545',
  },
};

export const AUTO_UPDATE_BALANCE_INTERVAL = 1000 * 5; // 15 seconds
export const DEFAULT_NETWORK = 1337;
export const SongADAOContractABI = [
  'event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)',
  'event ApprovalForAll(address indexed owner, address indexed operator, bool approved)',
  'event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)',
  'event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)',
  'function approve(address to, uint256 tokenId)',
  'function balanceOf(address owner) view returns (uint256)',
  'function batchMint(uint256[] _tokenIds, address[] _owners)',
  'function burnToken(uint256 _tokenId)',
  'function dailyMint(uint256 _tokenId, string _ipfsMetadataHash)',
  'function frequency() view returns (uint256)',
  'function getApproved(uint256 tokenId) view returns (address)',
  'function isApprovedForAll(address owner, address operator) view returns (bool)',
  'function maxPublicSupply() view returns (uint256)',
  'function name() view returns (string)',
  'function openStoreTokenIds(uint256) view returns (uint256)',
  'function owner() view returns (address)',
  'function ownerOf(uint256 tokenId) view returns (address)',
  'function previousTreasuryMint() view returns (uint256)',
  'function priceAmount() view returns (uint256)',
  'function publicClaim(uint256[] _tokenIds)',
  'function publicMint(uint256 _amount) payable',
  'function publicSale() view returns (bool)',
  'function renounceOwnership()',
  'function royaltyInfo(uint256, uint256 _salePrice) pure returns (address, uint256 royaltyAmount)',
  'function safeTransferFrom(address from, address to, uint256 tokenId)',
  'function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data)',
  'function setApprovalForAll(address operator, bool approved)',
  'function setFrequency(uint256 _seconds)',
  'function setOpenStoreTokenId(uint256[] _tokenIds, uint256[] _openStoreIds)',
  'function setPrice(uint256 _wei)',
  'function supportsInterface(bytes4 interfaceId) view returns (bool)',
  'function symbol() view returns (string)',
  'function toggleSale()',
  'function tokenURI(uint256 tokenId) view returns (string)',
  'function totalPublicMinted() view returns (uint256)',
  'function totalSupply() view returns (uint256)',
  'function transferFrom(address from, address to, uint256 tokenId)',
  'function transferOwnership(address newOwner)',
  'function withdrawFunds()',
];
