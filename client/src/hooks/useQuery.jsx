import * as React from 'react';
import query from '../helpers/query';
import { useIsMounted } from '../hooks/useIsMounted';

const cache = new Map();
const MAX_AGE = 0.5 * 60 * 1000; // 5 minuntes

/**
 * @param {number | string | Array<number | string>} queryKey
 * @param {() => Promise<typeof initData>} queryFn
 * @param {any} initData
 * @returns {{data: typeof initData, status: "loading" | "success" | "error"}}
 */
export default function useQuery(queryKey, queryFn, initData) {
  const hash = JSON.stringify(queryKey);
  const [data, setData] = React.useState(
    () => cache.get(hash)?.data ?? initData
  );

  const isMounted = useIsMounted();

  const refresh = async hash => {
    try {
      const data = await queryFn();
      if (data === undefined) return;
      cache.set(hash, { iat: Date.now(), data });
      if (!isMounted()) return;
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!cache.has(hash)) {
    // not cached till now ? then
    cache.set(hash);
    refresh(hash);
  } else if (Date.now() - cache.get(hash)?.iat > MAX_AGE) {
    // isStale ? then
    refresh(hash);
  }

  return { data };
}
