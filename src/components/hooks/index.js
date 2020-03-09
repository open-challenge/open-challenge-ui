import { useState, useRef, useEffect } from 'react';

export const useSize = () => {
  const ref = useRef();
  const [bbox, setBbox] = useState({});

  const set = () =>
    setBbox(ref && ref.current ? ref.current.getBoundingClientRect() : {});

  useEffect(() => {
    set();
    window.addEventListener('resize', set);
    return () => window.removeEventListener('resize', set);
  }, []);

  return [
    {
      x: bbox?.x || 0,
      y: bbox?.y || 0,
      width: bbox?.width || 0,
      height: bbox?.height || 0
    },
    ref
  ];
};
