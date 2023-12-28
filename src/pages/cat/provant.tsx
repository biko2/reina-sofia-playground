import React from 'react';
import { useTranslation } from 'react-i18next';

import { Link } from 'gatsby';

const Provant: React.FC = () => {
  const { t } = useTranslation('translation', { lng: 'cat' });

  return (
    <>
      <h1>{t('probando')}</h1>
      <Link to="/es/probando">Ir a castellano</Link>
    </>
  );
};

export default Provant;
