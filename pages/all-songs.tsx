import { Box, Button, ButtonGroup, Flex, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { AllSongsImages } from '../components/AllSongsImages';
import { AllSongsPage } from '../components/AllSongsPage';

const GRID_SIZE = {
  small: [4, 4, 12],
  medium: [3, 3, 6],
  large: [2, 2, 4],
};

function AllSongsIndex() {
  const [gridSize, setGridSize] = useState(GRID_SIZE.medium);

  const onGridSizeChange = (columns: number[]) => {
    setGridSize(columns);
  };
  return (
    <>
      <Box py={10} px={6}>
        <Flex
          flexDirection={['column', 'column', 'row']}
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading as="h1" mb={[4, 4, 0]}>
            All Songs
          </Heading>
          <ButtonGroup size="sm" variant="outline" isAttached>
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
      {gridSize === GRID_SIZE.small ? (
        <AllSongsImages songGridColumns={gridSize} />
      ) : (
        <AllSongsPage songGridColumns={gridSize} showSimpleSongCard />
      )}
    </>
  );
}

export default AllSongsIndex;
