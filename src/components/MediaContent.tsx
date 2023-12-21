import React, { ReactNode, useRef } from 'react';

import { useMotionValueEvent, useScroll } from 'framer-motion';

export const MediaContent: React.FC<{
  setIsDarkTheme: (value: boolean) => void;
  children: ReactNode;
}> = ({ setIsDarkTheme, children }) => {
  let container = useRef(null);

  let { scrollYProgress } = useScroll({
    target: container,
    offset: ['start center', 'end center'],
  });

  useMotionValueEvent(scrollYProgress, 'change', value => {
    if (value > 0 && value < 1) {
      setIsDarkTheme(true);
    } else {
      setIsDarkTheme(false);
    }
  });

  return <section ref={container}>{children}</section>;
};
