import React from 'react';

import { motion } from 'framer-motion';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import * as styles from './index.module.scss';

const Index: React.FC = () => {
  return (
    <>
      <motion.h1
        animate={{ x: [0, 400, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className={styles.title}
      >
        Reina Sofía playground
      </motion.h1>

      <ul>
        <li>
          <AniLink to="/DarkTheme/">Prueba dark theme</AniLink>
        </li>
        <li>
          <AniLink to="/DarkThemeFramer/">Prueba dark theme con Framer Motion</AniLink>
        </li>
        <li>
          <AniLink to="/ActivityPage/">Prueba de página de actividad</AniLink>
        </li>
      </ul>

      <motion.p
        animate={{ y: [0, 400, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        id="paragraph"
      >
        Lanzamos este espacio para probar animaciones de{' '}
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity }}
          className={styles.gsap}
          id="gsap"
        >
          Framer Motion
        </motion.span>{' '}
        en Gatsby y con CSS modules.
      </motion.p>
    </>
  );
};

export default Index;
