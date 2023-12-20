import { initI18next } from './src/utils/i18next';

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Called when the Gatsby browser runtime first *starts*.
// This is called before render happens.
// @see https://www.gatsbyjs.org/docs/browser-apis/#onClientEntry
export const onClientEntry = (): void => {
  initI18next();
  document.dispatchEvent(new Event('gatsbyOnClientEntry'));
};
