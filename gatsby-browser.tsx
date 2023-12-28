import React from 'react';

import { AnimatePresence } from 'framer-motion';
import { GatsbyBrowser } from 'gatsby';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => (
  <AnimatePresence mode="wait">{element}</AnimatePresence>
);

export const onClientEntry = (): void => {
  document.dispatchEvent(new Event('gatsbyOnClientEntry'));
};
