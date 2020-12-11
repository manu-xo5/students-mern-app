import * as React from 'react';

/**
 * @returns {boolean} is Mounted or not
 */
export const useIsMounted = () => {
  const mountedRef = React.useRef(true);
  const isMounted = React.useCallback(() => mountedRef.current, []);
  React.useLayoutEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return isMounted;
};
