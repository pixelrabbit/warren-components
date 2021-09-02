import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'warrens',
  plugins: [
    sass()
  ],
  globalStyle: 'src/global/variables.css',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
