import React from 'react';

import { Link } from 'gatsby';

import { useTranslations } from '../../infrastructure/translations';

const Probando: React.FC = () => {
  const { t } = useTranslations('es');

  return (
    <>
      <h1>{t('probando')}</h1>
      <Link to="/cat/provant">Ir a catalán</Link>
    </>
  );
};

export default Probando;
