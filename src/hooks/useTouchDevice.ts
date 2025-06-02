import { useEffect, useState } from "react";

const useTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const handleMatchMedia = (ev: MediaQueryListEvent) => {
      setIsTouch(ev.matches);
    };

    const mediaQuery = window.matchMedia('(pointer: coarse)');
    setIsTouch(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMatchMedia);

    return () => {
      mediaQuery.removeEventListener('change', handleMatchMedia);
    };
  }, []);

  return isTouch;
};

export { useTouchDevice }