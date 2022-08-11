import { useEffect, useState } from 'react';

export default function useScrolling() {
  const [scrollTop, setScrollTop] = useState<boolean>(false);

  function windowScrolling() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }

  useEffect(() => {
    windowScrolling();
  }, []);

  useEffect(() => {}, [scrollTop]);

  return { scrollTop };
}
