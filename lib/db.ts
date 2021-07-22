import { mapValues, uniq } from 'lodash-es';
import _db from '../generated/db';
import { Song, SongsResponse } from './types';
import { Beard, Instrument, Location, Mood, Topic } from './utils/constants';

const db = _db as Song[];

export function findSongs({
  location,
  topic,
  mood,
  beard,
  instrument,
  tag,
  page,
  size,
}: {
  location: Location;
  topic: Topic;
  mood: Mood;
  beard: Beard;
  instrument: Instrument;
  tag: string;
  page: number;
  size: number;
}): SongsResponse {
  // first, find available songs by filter criteria in req.query.
  // then take the valid songs and find all of their available filters
  // TODO: filter in-mem songs db by values
  const songs = db.filter((song) => {
    let tagsArray;
    let songContainsTags = false;
    if (tag) {
      tagsArray = tag.split(',');
      tagsArray.forEach((thisTag) => {
        if (song.tags.includes(thisTag)) {
          songContainsTags = true;
        }
      });
    }
    return [
      location ? song.location === location : true,
      topic ? song.topic === topic : true,
      mood ? song.mood === mood : true,
      beard ? song.beard === beard : true,
      instrument ? song.instrument === instrument : true,
      tag ? songContainsTags : true,
    ].every(Boolean);
  });

  const filters = mapValues(
    songs.reduce(
      (memo, song) => {
        memo.location.push(song.location);
        memo.topic.push(song.topic);
        memo.mood.push(song.mood);
        memo.beard.push(song.beard);
        memo.instrument.push(song.instrument);
        memo.tags.push(song.tags);
        return memo;
      },
      {
        location: [],
        topic: [],
        mood: [],
        beard: [],
        instrument: [],
        tags: [],
      },
    ),
    (values) => uniq(values),
  );

  return {
    filters,
    songs: songs.slice(page * size, page * size + size),
    totalCount: songs.length,
  };
}

export function getSong(id: string): Song {
  return db.find((song) => song.id === id);
}
