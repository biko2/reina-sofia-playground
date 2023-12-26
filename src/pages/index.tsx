import React from 'react';

import { motion } from 'framer-motion';
import { Link } from 'gatsby';

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
          <Link to="/DarkTheme/">Prueba dark theme</Link>
        </li>
        <li>
          <Link to="/DarkThemeFramer/">Prueba dark theme con Framer Motion</Link>
        </li>
        <li>
          <Link to="/ActivityPage/">Prueba de página de actividad</Link>
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
          GSAP
        </motion.span>{' '}
        en Gatsby y con CSS modules.
      </motion.p>
    </>
  );
};

export default Index;
