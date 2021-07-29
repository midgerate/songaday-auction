import { Box, Button, ButtonGroup, Flex, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { AllSongsPage } from '../components/AllSongsPage';

const GRID_SIZE = {
  small: 12,
  medium: 6,
  large: 4,
};

function AllSongsIndex() {
  const [gridSize, setGridSize] = useState(6);

  const onGridSizeChange = (columns: number) => {
    setGridSize(columns);
  };
  return (
    <>
      <Box py={10} px={6}>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading as="h1">All Songs</Heading>
          <ButtonGroup size="sm" variant="outline" spacing="6" isAttached>
            <Button
              isActive={gridSize === GRID_SIZE.small}
              onClick={() => {
                onGridSizeChange(GRID_SIZE.small);
              }}
            >
              Small
            </Button>
            <Button
              isActive={gridSize === GRID_SIZE.medium}
              onClick={() => {
                onGridSizeChange(GRID_SIZE.medium);
              }}
            >
              Medium
            </Button>
            <Button
              isActive={gridSize === GRID_SIZE.large}
              onClick={() => {
                onGridSizeChange(GRID_SIZE.large);
              }}
            >
              Large
            </Button>
          </ButtonGroup>
        </Flex>
      </Box>
      <AllSongsPage
        songGridColumns={[2, 2, gridSize]}
        hideFilters
        showSimpleSongCard
        hideSimpleSongCardTitle={gridSize === GRID_SIZE.small}
      />
    </>
  );
}

export default AllSongsIndex;
