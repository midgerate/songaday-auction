import React, { useState, useCallback, useMemo, useEffect } from 'react';
import get from 'lodash/get';
import pluralize from 'pluralize';
import FlipMove from 'react-flip-move';
import cx from 'classnames';
import getInitialProps from '../lib/getInitialProps/getInitialProps';
import MiniMann, { MiniMannConfig } from '../components/minimann/MiniMann';
import {
  Location,
  Topic,
  Mood,
  Beard,
  Instrument,
  MinimannPropertyValue,
  LocationViewConfig,
  HumanMaps,
  HumanKeys,
} from '../lib/utils/constants';
import FilterTag from '../components/FilterTag';
import NoticeBox from '../components/NoticeBox';
import useAvailableSongs from '../lib/queries/useAvailableSongs';
import { useAsync } from 'react-async';
import cleanObject from '../lib/utils/cleanObject';
import useQueryParams from '../lib/useQueryParams';
import Header from '../components/minimann/Header';
import SongColorBackground from '../components/SongColorBackground';
import buildSongListDescription from '../lib/buildSongListDescription';
import SongCard from '../components/song/SongCard';
import fetcher from '../lib/fetcher';
import APIToken from '../lib/containers/APIToken';
import Head from 'next/head';

const EMPTY_HEADER_CONFIG: MiniMannConfig = {
  location: Location.Vermont,
  topic: Topic.Kids,
  mood: Mood.Angry,
  beard: Beard.Shadow,
  instrument: Instrument.Organ,
};

function Create({ initialAvailableSongs }: { initialAvailableSongs: any }) {
  // filter state
  const [filters, setFilters] = useQueryParams();
  const resetFilters = useCallback(() => setFilters({}), [setFilters]);
  const hasFiltered = useMemo(() => Object.values(filters).length > 0, [filters]);

  const handleFilterTagSelect = async (key: string, value: MinimannPropertyValue) => {
    setFilters({ ...filters, [key]: value });
  };

  // data state
  const [token] = APIToken.useContainer();
  const promiseFn = useMemo(
    () => async ({ filters }) =>
      fetcher(token, `/api/available_songs?${new URLSearchParams(cleanObject(filters))}`),
    [token],
  );
  const { data, error, isPending: loadingSongs, cancel } = useAsync<any>({
    promiseFn,
    initialValue: initialAvailableSongs,
    filters,
    watch: filters,
  });

  const hasMore = useMemo(() => get(data, ['hasMore'], false), [data]);

  // TODO: remove this line when this issue is closed
  // https://github.com/async-library/react-async/issues/249
  useEffect(() => {
    cancel();
  }, [cancel]);

  // ui filter header state
  const [focusedTab, setFocusedTab] = useState<string>();

  // ui selected song state
  const [focusedSong, setFocusedSong] = useState<number>();

  const discardChanges = useCallback(() => {
    resetFilters();
    setFocusedTab(undefined);
    setFocusedSong(undefined);
  }, [resetFilters]);

  const songs: any[] = useMemo(() => get(data, ['songs'], []), [data]);
  const song: any = useMemo(() => {
    if (focusedSong) {
      return songs.find(song => song.number == focusedSong);
    } else {
      return songs.length ? songs[0] : undefined;
    }
  }, [focusedSong, songs]);
  const songNumber = useMemo(() => get(song, ['number']), [song]);
  const songLocation = useMemo(() => get(song, ['location']), [song]);
  const dark = get(LocationViewConfig, [songLocation, 'dark'], false);

  const hasManySongs = songs.length > 1;

  // force showing the selected filters if we're not looking at a specific set or there's only one song
  const showSelectedFilters = !focusedTab || !hasManySongs;
  // hide the selected tab when showing the selected filters
  const visiblySelectedTab = showSelectedFilters ? undefined : focusedTab;

  // view builders
  const tabButton = (key: string) => {
    const focused = visiblySelectedTab === key;
    const selected = filters[key] !== undefined;
    const disabled = !hasManySongs || (!focused && selected);

    return (
      <button
        className={cx(
          'mr-1 mb-1 px-4 py-2 leading-none text-sm border-2 border-gray-800 rounded font-bold disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-gray-200 text-gray-900': !focused && !selected,
            'bg-gray-100 text-gray-900': !focused && selected,
            'bg-gray-800 text-white': focused,
          },
        )}
        onClick={() => setFocusedTab(focused ? undefined : key)}
        disabled={disabled}
      >
        {filters[key] ? HumanMaps[key][filters[key]] : HumanKeys[key]}
      </button>
    );
  };

  return (
    <>
      <Head>
        <title>Song a Day World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {songNumber ? (
        <Header number={songNumber} initialSong={song} />
      ) : (
        <MiniMann {...(song || EMPTY_HEADER_CONFIG)} />
      )}

      <SongColorBackground className="flex-grow p-4 pb-10" location={songLocation}>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row flex-wrap">
              {tabButton('location')}
              {tabButton('instrument')}
              {tabButton('topic')}
              {tabButton('mood')}
              {tabButton('beard')}
            </div>
            <button
              className={cx(
                'p-4 hover:underline disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
                { 'text-white': dark },
              )}
              onClick={discardChanges}
              disabled={!hasFiltered}
            >
              clear all
            </button>
          </div>

          <FlipMove className={cx('flex flex-row flex-wrap', { 'text-white': dark })}>
            {showSelectedFilters &&
              Object.keys(filters).map(
                key =>
                  filters[key] && (
                    <div key={key}>
                      <FilterTag
                        className="mr-4 mb-2"
                        prefix={key}
                        thumbKey={filters[key]}
                        size="24"
                        selected={true}
                      >
                        {HumanMaps[key][filters[key]]}
                      </FilterTag>
                    </div>
                  ),
              )}
            {!showSelectedFilters &&
              data &&
              data.filters &&
              data.filters[focusedTab] &&
              data.filters[focusedTab].map(prop => (
                <div className={cx({ 'pointer-events-none': loadingSongs })} key={prop}>
                  <FilterTag
                    onClick={() => handleFilterTagSelect(focusedTab, prop)}
                    className="mr-4 mb-2"
                    prefix={focusedTab}
                    thumbKey={prop}
                    size="24"
                    selected={filters[focusedTab] === prop}
                  >
                    {HumanMaps[focusedTab][prop]}
                  </FilterTag>
                </div>
              ))}
          </FlipMove>

          {error && !loadingSongs && (
            <NoticeBox className="mb-2" color="red">
              {JSON.stringify(error)}
            </NoticeBox>
          )}
        </div>

        <div className="flex flex-col">
          {hasManySongs ? (
            <div className="flex flex-col justify-center items-start mb-4">
              <p
                className={cx('text-3xl leading-tight font-bold', {
                  'text-white': dark,
                })}
              >
                More Songs Like This
              </p>
              <p className={cx('leading-tight', { 'text-white': dark })}>
                {hasMore ? `${songs.length - 1}+` : `${songs.length - 1}`} more{' '}
                {pluralize('song', songs.length - 1)} {buildSongListDescription(filters)}. Discover
                more specific songs with the filters here 👆
              </p>
            </div>
          ) : (
            <NoticeBox color="gray">You've found the only song with this combination!</NoticeBox>
          )}
          <div className="flex flex-row flex-wrap song-card-list">
            {songs.slice(1).map(song => (
              <div key={song.id} className="w-full md:song-card mb-4 cursor-pointer">
                <SongCard number={song.number} initialSong={song} className="rounded-lg" />
              </div>
            ))}
          </div>
        </div>
        {hasMore && (
          <NoticeBox color="gray">
            👆 There are more than {songs.length - 1} songs {buildSongListDescription(filters)}.
            Discover more specific songs using the filters above 👆
          </NoticeBox>
        )}
      </SongColorBackground>
    </>
  );
}

Create.getInitialProps = getInitialProps(async ctx => {
  const initialAvailableSongs = await useAvailableSongs.getInitialData(ctx, ctx.query, {
    required: true,
  });

  return { initialAvailableSongs };
});

export default Create;
