import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';

import * as styles from './index.module.scss';

const About: React.FC = () => {
  return (
    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} transition={{ duration: 1 }}>
      <h1 className={styles.title} id="title">
        About us
      </h1>

      <p id="paragraph">Somos gente intentando animar las transiciones. 👩🏽‍🎨</p>

      <Link to="/">Regresa a la home</Link>
    </motion.div>
  );
};

export default About;
