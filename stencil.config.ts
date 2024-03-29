import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'youtube-video',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      dir: 'docs',
      serviceWorker: null // disable service workers
    }
  ]
};
