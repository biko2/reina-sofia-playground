/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-empty-function */

import React from 'react';

import { GatsbySSR } from 'gatsby';

global.window = {
  isSsr: true,
  localStorage: {
    // @ts-ignore: Unreachable code error
    getItem: () => {},
  },
  // @ts-ignore: Unreachable code error
  location: { hostname: '', href: '' },
  // @ts-ignore: Unreachable code error
  navigator: {
    userAgent: '',
  },
  // @ts-ignore: Unreachable code error
  requestAnimationFrame: () => {},
  // @ts-ignore: Unreachable code error
  console: {
    error: () => {},
  },
};

global.Element = {
  // @ts-ignore: Unreachable code error
  prototype: {},
};

class Storage {
  constructor() {}
}

// @ts-ignore
global.Storage = Storage;

export const onPreRenderHTML: GatsbySSR['onPreRenderHTML'] = ({
  getHeadComponents,
  replaceHeadComponents,
  getPostBodyComponents,
  replacePostBodyComponents,
}) => {
  const headComponents = getHeadComponents();
  // Sort components to make <HeadComponents> the first one.
  headComponents.sort((x, y) => {
    if (!React.isValidElement(x) || !React.isValidElement(y)) {
      return 0;
    }

    if (x?.key === 'HeadComponents') {
      return -1;
    }
    if (y?.key === 'HeadComponents') {
      return 1;
    }
    return 0;
  });
  replaceHeadComponents(headComponents);

  const postBodyComponents = getPostBodyComponents();

  postBodyComponents.sort((x, y) => {
    if (!React.isValidElement(x) || !React.isValidElement(y)) {
      return 0;
    }

    if (x?.key === 'PostBodyComponents') {
      return -1;
    }
    if (y?.key === 'PostBodyComponents') {
      return 1;
    }
    return 0;
  });
  replacePostBodyComponents(postBodyComponents);
};

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents,
  setPreBodyComponents,
}) => {
  setHeadComponents([
    React.createElement(
      HeadComponents,
      {
        key: 'HeadComponents',
      },
      null
    ),
  ]);

  setPreBodyComponents([]);
};

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => <>{element}</>;

export const wrapPageElement: GatsbySSR<Record<string, unknown>>['wrapPageElement'] = ({
  element,
  props,
}) => <>{element}</>;

const HeadComponents: React.FC = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon" />

      <script src="https://apis.google.com/js/api.js" type="text/javascript"></script>
      <script src="https://accounts.google.com/gsi/client" type="text/javascript"></script>
    </>
  );
};
