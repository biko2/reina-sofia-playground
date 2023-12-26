import React from 'react';

import { motion } from 'framer-motion';

import * as styles from './Layout.module.scss';

interface Props {
  title?: React.ReactNode;
  slug: string;
}

export const Layout: React.FC<React.PropsWithChildren<Props>> = ({ children, title, slug }) => {
  return (
    <>
      {title && (
        <motion.h1
          animate={{ x: [0, 400, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className={styles.title}
        >
          {title}
        </motion.h1>
      )}

      <motion.main
        key={slug}
        initial={{
          opacity: 0,
          x: -200,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: 200,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {children}
      </motion.main>
    </>
  );
};
