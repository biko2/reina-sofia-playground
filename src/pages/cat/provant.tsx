import React from 'react';

import { Link } from 'gatsby';

import { useTranslations } from '../../infrastructure/translations';

const Provant: React.FC = () => {
  const { t } = useTranslations('cat');
  return (
    <>
      <h1>{t('probando')}</h1>
      <Link to="/es/probando">Ir a castellano</Link>
    </>
  );
};

export default Provant;
