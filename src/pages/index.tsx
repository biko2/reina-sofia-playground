import React, { useEffect } from 'react';

import { Link } from 'gatsby';
import gsap from 'gsap';

import * as styles from './index.module.scss';

const Index: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      '#title',
      { x: 0 },
      { x: 400, ease: 'Linear.easeNone', repeat: -1, duration: 3, yoyo: true }
    );

    gsap.fromTo(
      '#paragraph',
      { y: 0 },
      { y: 400, ease: 'Linear.easeNone', repeat: -1, duration: 3, yoyo: true }
    );

    gsap.to('#gsap', { rotation: 360, repeat: -1, duration: 8 });
  }, []);

  return (
    <>
      <h1 className={styles.title} id="title">
        Reina Sofía playground
      </h1>

      <ul>
        <li>
          <Link to="/ActivityPage/">Prueba texto encolumnado</Link>
        </li>
      </ul>

      <p id="paragraph">
        Lanzamos este espacio para probar animaciones de{' '}
        <span className={styles.gsap} id="gsap">
          GSAP
        </span>{' '}
        en Gatsby y con CSS modules.
      </p>
    </>
  );
};

export default Index;
