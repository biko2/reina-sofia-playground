import React from 'react';

import { GatsbyBrowser } from 'gatsby';

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

// Called when the user changes routes
// @see https://www.gatsbyjs.org/docs/browser-apis/#onRouteUpdate
export const onRouteUpdate = (): void => {
  document.dispatchEvent(new Event('gatsbyOnRouteUpdate'));
};

// Between these two events, React render/rehydrate happens.

// Called when the initial (but not subsequent) render of Gatsby App is *done* on the client.
// This is called after render happens, and only once, on first render
// @see https://www.gatsbyjs.org/docs/browser-apis/#onInitialClientRender
export const onInitialClientRender = (): void => {
  document.dispatchEvent(new Event('utag-loaded'));
};

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => <>{element}</>;

export const wrapPageElement: GatsbyBrowser<Record<string, unknown>>['wrapPageElement'] = ({
  element,
  props,
}) => <>{element}</>;
