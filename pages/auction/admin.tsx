import { Button, Heading } from '@chakra-ui/react';
import { AuctionHouse } from '@zoralabs/zdk';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { SongADay__factory } from '../../types';
import { useContract, useReadContract, useWriteContract } from '../../web3/hooks';
import { useWallet } from '../../web3/WalletContext';

const Admin = () => {
  const tokenId = 5000;
  const zeroAddress = '0x0000000000000000000000000000000000000000';

  const { provider } = useWallet();
  const auctionHouse = new AuctionHouse(provider?.getSigner(), 4);
  const auctionHouseAccount = auctionHouse.auctionHouse.address;
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_SONGADAY_CONTRACT_ADDRESS,
    SongADay__factory,
  );

  //   console.log(process.env.NEXT_PUBLIC_SONGADAY_CONTRACT_ADDRESS);
  console.log('auctionhouseaccount', auctionHouseAccount);

  const { response: approvedAddress } = useReadContract(
    contract,
    'getApproved',
    undefined,
    tokenId,
  );
  console.log('approvedAddress', approvedAddress);
  const [approved, setApproved] = useState(false);

  const handleConfirm = () => {
    setApproved(true);
    console.log('confirmed');
  };
  const handleError = (error) => console.error('error', error);
  const handleResponse = () => console.log('waiting...');

  const [approve] = useWriteContract(contract, 'approve', {
    onConfirmation: handleConfirm,
    onError: handleError,
    onResponse: handleResponse,
  });

  useEffect(() => {
    if (approvedAddress === auctionHouseAccount) setApproved(true);
    else setApproved(false);
  }, [approvedAddress, auctionHouseAccount]);

  const approveAuction = () => {
    approve(auctionHouseAccount, tokenId);
  };

  const createAuction = async () => {
    const createAuctionTx = await auctionHouse.createAuction(
      tokenId,
      86400,
      ethers.utils.parseEther('0.2'),
      zeroAddress,
      0,
      zeroAddress,
      contract.address,
    );

    console.log('Waiting for auction to be made...');
    await createAuctionTx.wait();
    console.log('Auction created!');
  };

  return (
    <>
      <Heading>I'm Admin!</Heading>
      {!approved && <Button onClick={() => approveAuction()}>Set approved</Button>}
      {approved && <Button onClick={() => createAuction()}>Create auction</Button>}
    </>
  );
};

export default Admin;
