import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'js-console-widget',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: 'js-console-widget',
      proxiesFile: '../react-component-library/src/components.ts',
    }),
    angularOutputTarget({
      componentCorePackage: 'js-console-widget',
      directivesProxyFile: '../angular-component-library/src/directives/proxies.ts',
      directivesArrayFile: '../angular-component-library/src/directives/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    vueOutputTarget({
      componentCorePackage: 'js-console-widget',
      proxiesFile: '../vue-component-library/src/proxies.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
