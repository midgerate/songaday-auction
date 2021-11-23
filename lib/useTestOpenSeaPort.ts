import { EventType, Network, OpenSeaPort } from 'opensea-js';
import { useEffect, useState } from 'react';
import { Account } from '../containers/Account';
import { useWallet } from '../web3/WalletContext';

export function useTestOpenSeaPort() {
  // const { provider } = Account.useContainer();
  const { provider } = useWallet();
  const [openSeaPort, setOpenSeaPort] = useState<OpenSeaPort>();
  const [transactionStarted, setTransactionStarted] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const onModalClose = () => setIsModalOpen(false);

  useEffect(() => {
    if (provider) {
      const seaport = new OpenSeaPort(provider, {
        networkName: Network.Rinkeby,
      });
      setOpenSeaPort(seaport);
    }
  }, [provider]);

  useEffect(() => {
    if (openSeaPort && openSeaPort.addListener) {
      openSeaPort.addListener(EventType.TransactionCreated, () => {
        setTransactionStarted(true);
      });
      openSeaPort.addListener(EventType.TransactionConfirmed, ({ event }) => {
        // Only reset your exchange UI if we're finishing an order fulfillment or cancellation
        if (event == EventType.MatchOrders || event == EventType.CancelOrder) {
          setTransactionStarted(false);
        }
      });
    }
  }, [openSeaPort]);

  return {
    openSeaPort,
    transactionStarted,
    isModalOpen,
    setIsModalOpen,
    onModalClose,
  };
}
