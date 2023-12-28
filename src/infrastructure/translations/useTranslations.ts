import { useContext } from 'react';

import { TFunction } from 'i18next';

import { tFunctionFactory } from './tFunctionFactory';
import { TranslationsContext } from './TranslationsContext';

export function useTranslations(lang: string): { t: TFunction } {
  const t = tFunctionFactory(lang);

  return { t };
}
