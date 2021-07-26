import { isEmpty, pickBy } from 'lodash-es';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { createContainer } from 'unstated-next';
import { Beard, Instrument, Location, Mood, Topic, Year } from '../lib/utils/constants';

export type FilterParams = {
  id?: string;
  location: Location;
  topic: Topic;
  mood: Mood;
  beard: Beard;
  instrument: Instrument;
  tag: string | string[];
  year: Year;
};

const filterFalsy = (obj: Record<string, any>) => pickBy(obj);
const makeSearch = (params: Record<string, any>) => {
  const cleanedParams = filterFalsy(params);
  if (isEmpty(cleanedParams)) return '';
  return `?${new URLSearchParams(cleanedParams)}`;
};

export function useFilters() {
  const router = useRouter();

  const filters: FilterParams = useMemo(
    () => ({
      id: (router.query.id as string) ?? null,
      location: ((router.query.location as string) as Location) ?? null,
      topic: ((router.query.topic as string) as Topic) ?? null,
      mood: ((router.query.mood as string) as Mood) ?? null,
      beard: ((router.query.beard as string) as Beard) ?? null,
      instrument: ((router.query.instrument as string) as Instrument) ?? null,
      tag: router.query.tag ?? null,
      year: ((router.query.year as string) as Year) ?? null,
    }),
    [router],
  );

  const makeHref = useCallback(
    ({ id, ...search }: Partial<FilterParams>) => `/${id ? `song/${id}` : ''}${makeSearch(search)}`,
    [],
  );

  const pushFilter = useCallback(
    (filter: Partial<FilterParams>) =>
      router.push(makeHref({ ...filters, ...filter }), undefined, { shallow: true }),
    [makeHref, filters, router],
  );

  const resetFilters = useCallback(
    () => router.push(makeHref({}), undefined, { shallow: true }), //
    [makeHref, router],
  );

  const appendFilters = useCallback(
    (filterParams: Partial<FilterParams>) => {
      if (router?.query?.tag) {
        const originalHref = makeHref(filterParams);
        console.log('original', originalHref);

        const queryTag = router.query.tag;
        let newQueryString;
        if (typeof queryTag === 'string') {
          newQueryString = `tag=${queryTag}`;
        } else {
          const filteredTags = queryTag.filter((tag) => !originalHref.includes(tag));
          newQueryString = `tag=${filteredTags.join('&tag=')}`;
        }

        if (originalHref.includes(newQueryString)) {
          return originalHref;
        }
        return `${originalHref}&${newQueryString}`;
      } else {
        return makeHref(filterParams);
      }
    },
    [makeHref, router],
  );

  return { filters, pushFilter, resetFilters, makeHref, appendFilters };
}

export const Filters = createContainer(useFilters);
