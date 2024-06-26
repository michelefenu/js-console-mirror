import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'js-console-mirror',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, 
      dir: './examples/vanilla',
    }
  ],
  testing: {
    browserHeadless: "new",
  },
};
