import React from 'react';

import { AnimatePresence } from 'framer-motion';
import { GatsbyBrowser } from 'gatsby';

import { initI18next } from './src/utils/i18next';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => (
  <AnimatePresence mode="wait">{element}</AnimatePresence>
);

export const onClientEntry = (): void => {
  initI18next();
  document.dispatchEvent(new Event('gatsbyOnClientEntry'));
};
