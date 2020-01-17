import React from 'react';
import cx from 'classnames';
import useSong from '../../lib/queries/useSong';
import TagThumbnail from './TagThumbnail';
import TextTag from './TextTag';
import WithClassName from '../../lib/utils/WithClassName';

function SongCard({ className, number }: { number: number } & WithClassName) {
  const { data: song, error } = useSong(number);

  // TODO: skeleton loading & getInitialProps
  if (!song || error) {
    console.log(song, error);
    return null;
  }

  return (
    <>
      <div
        className={cx(
          'w-full bg-white md:rounded md:shadow-lg overflow-hidden px-8 py-4 flex flex-col',
          className,
        )}
      >
        <div className="flex flex-row justify-between items-stretch mb-3">
          <div className="flex flex-col justify-center items-start">
            <p className="text-xl leading-tight font-semibold truncate">In the Time of the Gods</p>
            <p className="text-xs italic leading-tight text-gray-600 truncate">
              Song 1 | January 1st, 2009
            </p>
          </div>
          <div className="my-1 p-2 rounded text-white flex flex-col date">
            <div className="flex-grow flex items-center justify-center text-3xl font-extrabold">
              17
            </div>
            <div className="flex-grow flex items-center justify-center text-sm font-semibold leading-tight uppercase truncate">
              Jul &#39;19
            </div>
          </div>
        </div>
        <div className="mb-3 aspect-16/9 embed">embed</div>
        <div className="mb-3 leading-snug text-base md:text-sm xl:text-base">
          one year ago 3000 miles away i picked up my ukelele and i started to play and every single
          day no matter what came my way i picked up my ukelele and i started to play some folks
          they try...
        </div>
        <div className="mb-3 flex flex-row flex-wrap">
          <TagThumbnail className="mr-2 mb-2" prefix="location" thumbKey={song.location} />
          <TagThumbnail className="mr-2 mb-2" prefix="topic" thumbKey={song.topic} />
          <TagThumbnail className="mr-2 mb-2" prefix="mood" thumbKey={song.mood} />
          <TagThumbnail className="mr-2 mb-2" prefix="beard" thumbKey={song.beard} />
          <TagThumbnail className="mr-2 mb-2" prefix="instrument" thumbKey={song.instrument} />
        </div>
        <div className="flex flex-row flex-wrap">
          <TextTag className="mr-2 mb-2" text="New York" />
          <TextTag className="mr-2 mb-2" text="Fm" />
          <TextTag className="mr-2 mb-2" text="Politics" />
        </div>
      </div>

      <style jsx>{`
        .date {
          background-color: #d6cf90;
          line-height: 0.95;
        }
        .embed {
          background-color: red;
        }
      `}</style>
    </>
  );
}

export default SongCard;
