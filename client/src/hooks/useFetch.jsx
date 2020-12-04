import { useState, useEffect, useRef, useCallback } from 'react';

const Status = {
  Error: 'error',
  Loading: 'loading',
  Success: 'success',
};

const useFetch = ({ key = [], query, initState = {} }) => {
  const [status, setStatus] = useState(Status.Loading);
  const [data, setData] = useState(initState);
  const [error, setError] = useState(null);
  const _query = useCallback(query, [query]);

  useEffect(() => {
    const _main = async () => {
      try {
        setStatus(Status.Loading);
        const res = await _query();
        setData(res);
        setStatus(Status.Success);
      } catch (error) {
        setError(error);
        setStatus(Status.Error);
      }
    };
    _main();
  }, key);

  return {
    status,
    data,
    error,
  };
};
export default useFetch;
