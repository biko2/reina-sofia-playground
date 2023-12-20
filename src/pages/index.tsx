import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import gsap from 'gsap';

import * as styles from './index.module.scss';

const Index: React.FC = () => {
  const { t, i18n } = useTranslation();

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
      <select onChange={e => i18n.changeLanguage(e.target.value)}>
        <option value="es">ES</option>
        <option value="cat">CAT</option>
      </select>
      <h1 className={styles.title} id="title">
        {t('header')}
      </h1>

      <h2>{t('welcome')}</h2>

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
