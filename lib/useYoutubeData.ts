import useSWR from 'swr';
import fetcher from '../lib/fetcher';

export function useYoutubeData(youtubeId: string) {
  const youtubeUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&id=${youtubeId}&key=AIzaSyCa6wBoE_a9knIds8-c46q5Z1saqelC8lA`;

  const { data: youtubeData } = useSWR(youtubeId ? youtubeUrl : null, fetcher);

  let videoViews = '';
  let publishedTime;
  if (youtubeData?.items && youtubeData.items.length > 0) {
    videoViews = youtubeData.items[0].statistics.viewCount;
    publishedTime = new Date(youtubeData.items[0].snippet.publishedAt);
  }

  return {
    videoViews,
    publishedTime,
  };
}
