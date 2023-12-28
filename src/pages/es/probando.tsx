import React from 'react';
import { useTranslation } from 'react-i18next';

import { Link } from 'gatsby';

const Probando: React.FC = () => {
  const { t } = useTranslation('translation', { lng: 'es' });

  return (
    <>
      <h1>{t('probando')}</h1>
      <Link to="/cat/provant">Ir a catalán</Link>
    </>
  );
};

export default Probando;
