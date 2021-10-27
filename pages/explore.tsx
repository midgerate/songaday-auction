import { GetStaticProps } from 'next';
import { ComponentPropsWithoutRef } from 'react';
import { Page } from '../components/Page';
import { OpenSeaCollection, SongsProgress } from '../lib/types';

function Homepage({ progressBarData }: { progressBarData: SongsProgress }) {
  return <Page isHomepage progressBarData={progressBarData} />;
}

// Get the assets from OpenSea. We set the `owner` to Jonathan's address
// so that we only fetch songs that have not been sold.
function fetchAvailableSongs(page: number): string {
  const offset = page * 50;
  return `https://api.opensea.io/api/v1/assets?${new URLSearchParams({
    collection: 'song-a-day',
    limit: '50', // API is capped to 50
    // order_by: 'visitor_count',
    owner: '0x3d9456ad6463a77bd77123cb4836e463030bfab4', // Jonathan's address
    offset: offset.toString(),
  })}`;
}

// Loops through all the collections that Jonathan owns and find `song-a-day`.
// Get the stats off of it and return for the Progress bar.
function getSongsProgress(data: OpenSeaCollection[], availableSongsCounter: number): SongsProgress {
  if (!data) {
    return {
      totalSupply: 0,
      totalSales: 0,
      progressPercent: 0,
    };
  }

  const songADayCollection = data.find((datum) => datum.slug === 'song-a-day');

  if (songADayCollection) {
    const totalSupply = songADayCollection.stats.total_supply;

    const totalSales = totalSupply - availableSongsCounter;
    return {
      totalSupply,
      totalSales,
      progressPercent: (totalSales / totalSupply) * 100,
    };
  }
}

const ONE_HOUR = 60 * 60;

export const getStaticProps: GetStaticProps<
  ComponentPropsWithoutRef<typeof Homepage>
> = async () => {
  const response = await fetch(
    `https://api.opensea.io/api/v1/collections?${new URLSearchParams({
      limit: '300',
      asset_owner: '0x3d9456ad6463a77bd77123cb4836e463030bfab4', // Jonathan's address
    })}`,
  );

  const updateAvailableSongs = async (availableSongsCounter = 0, page = 0) => {
    const availableSongsResponse = await fetch(fetchAvailableSongs(page));
    const availableSongsResponseData = await availableSongsResponse.json();
    if (availableSongsResponseData.assets.length < 50) {
      availableSongsCounter += availableSongsResponseData.assets.length;
      return availableSongsCounter;
    }
    if (availableSongsResponseData.assets.length === 50) {
      availableSongsCounter += await updateAvailableSongs(availableSongsCounter + 50, page + 1);
      return availableSongsCounter;
    }
  };

  const data = await response.json();
  const availableSongsCounter = await updateAvailableSongs();

  const progressBarData = getSongsProgress(data, availableSongsCounter);

  return {
    props: { progressBarData: { ...progressBarData } },
    revalidate: ONE_HOUR,
  };
};

export default Homepage;
