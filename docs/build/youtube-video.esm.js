import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-5650e662.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["youtube-video",[[1,"youtube-video",{"src":[1],"width":[1],"height":[1],"videoTitle":[1,"video-title"],"played":[32]}]]]], options);
});
