import { Button, Container, FormControl, FormLabel, Input, FormHelperText } from '@chakra-ui/react';
import { useState } from 'react';
import Footer from '../components/Footer';
import { SongADAOContractABI } from '../web3/constants';
import { useContract, useReadContract, useWriteContract } from '../web3/hooks';
import { useWallet } from '../web3/WalletContext';
import { SongADay__factory } from './types';

export default function Mint() {
  const [waiting, setWaiting] = useState(false);
  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  const { contract } = useContract(contractAddress, SongADay__factory);
  const { address, provider } = useWallet();
  // const { response, error } = useReadContract(contract, 'name');
  const { response: priceAmount } = useReadContract(contract, 'priceAmount');

  // useEffect(() => {
  //   const getName = async () => {
  //     const testContract = await contract.name();
  //     console.log(testContract);
  //   };
  //   getName();
  // }, [contract?.address]);

  const handleConfirmation = async () => {
    // toast.success('Plasma Claimed');
    console.log('Plasma Claimed');
    setWaiting(false); // create waiting state variable - utilize modal
  };

  const handleHarvested = async () => {
    console.log('Waiting for transaction to finish');
  };

  const handleError = (error: any) => {
    console.log(error?.data?.message || error.message);
  };

  const [mint] = useWriteContract(contract, 'publicMint', {
    onConfirmation: handleConfirmation, // when txn is confirmed on chain
    onError: handleError, // txn had an err
    onResponse: handleHarvested, // txn has been accepted on chain / in pool
  });

  const [flipSale] = useWriteContract(contract, 'toggleSale', {
    onConfirmation: handleConfirmation, // when txn is confirmed on chain
    onError: handleError, // txn had an err
    onResponse: handleHarvested, // txn has been accepted on chain / in pool
  });

  // Later call harvestPlasma

  // onClick = {() => {
  //   try {
  //   setWaiting(true)
  // await harvestPlasma(..args)
  // } catch(e) {
  //   console.log(e)
  //   setWaiting(false)
  // }
  // }}

  // console.log('provider', provider);
  // console.log('abi', SongADAOContractABI);
  // console.log('address', address);
  console.log('price Amount', priceAmount?.toString());
  // console.log('custom error', error);

  return (
    <>
      <Container>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="number" />
          <FormHelperText>We'll never share your email.</FormHelperText>

          <Button
            onClick={async () => {
              try {
                setWaiting(true);
                await mint(4, { value: priceAmount.mul(4) });
              } catch (e) {
                console.log(e);
                setWaiting(false);
              }
            }}
          >
            MINT 🍬
          </Button>
          <Button
            onClick={async () => {
              try {
                setWaiting(true);
                await flipSale();
              } catch (e) {
                console.log(e);
                setWaiting(false);
              }
            }}
          >
            FLIP SALE
          </Button>
        </FormControl>
      </Container>
      <Footer />
    </>
  );
}
