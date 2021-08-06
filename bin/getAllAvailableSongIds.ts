#!/usr/bin/env ts-node

import { config } from 'dotenv';
import { writeFileSync } from 'fs';
import fetch from 'node-fetch';
import path from 'path';
config();

function getSongId(data) {
  return data.map((song) => {
    if (song.name && song.name.includes('#')) {
      const splitSong = song.name.split('Song A Day #');
      const number = splitSong[1];
      return number;
    } else {
      return null;
    }
  });
}

const main = async () => {
  const allSongs = [];

  let loop = true;
  let offset = 0;

  async function fetchAllSongs() {
    try {
      const response = await fetch(
        `https://api.opensea.io/api/v1/assets?${new URLSearchParams({
          collection: 'song-a-day',
          limit: '50', // API is capped to 50
          order_by: 'visitor_count',
          owner: '0x3d9456ad6463a77bd77123cb4836e463030bfab4', // Jonathan's address
          offset: offset.toString(),
        })}`,
      );
      const data = await response.json();
      return data.assets;
    } catch (error) {
      console.log(error);
    }
  }

  while (loop === true) {
    const assets = await fetchAllSongs();
    allSongs.push(assets);
    if (assets.length === 50) {
      offset += 50;
    } else {
      loop = false;
    }
  }
  const allSongsFlat = allSongs.flat();
  const songIds = getSongId(allSongsFlat);

  writeFileSync(
    path.join(__dirname, '../generated/availableSongIds.js'),
    `export default ${JSON.stringify(songIds.filter((id) => id !== null))}`,
    {
      flag: 'w',
    },
  );
};

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
