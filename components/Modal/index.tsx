import { CloseIcon } from '@chakra-ui/icons';
import { Box, Container, Flex, Heading, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ show, onClose, children, title, loading }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      bgColor="blackAlpha.600"
      display="flex"
      justifyContent="center"
      p={4}
      pt={32}
      alignItems="start"
      onClick={handleCloseClick}
    >
      <Box w="lg" bgColor="white" p={6} rounded="md" onClick={(e) => e.stopPropagation()}>
        <Flex direction="row-reverse">
          <a href="#" onClick={handleCloseClick}>
            <CloseIcon />
          </a>
        </Flex>
        <Flex justifyContent="center" direction="column" alignItems="center">
          <Heading>{title}</Heading>
          {loading && <Spinner size="lg" />}
          <Box>{children}</Box>
        </Flex>
      </Box>
    </Box>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
  } else {
    return null;
  }
};

export default Modal;
