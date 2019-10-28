# youtube-video

A web component for displaying youtube videos in a lazy-loaded manner.  Displays and loads only the video thumbnail until the user clicks, then it loads the player and auto-plays.

By default it takes the size of it's container, but an explicity width/height can be passed as props.

See the demo: https://beck24.github.io/youtube-video-component/



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute     | Description                  | Type     | Default           |
| ------------------ | ------------- | ---------------------------- | -------- | ----------------- |
| `height`           | `height`      | Explicit height of the video | `string` | `'100%'`          |
| `src` _(required)_ | `src`         | The youtube video URL        | `string` | `undefined`       |
| `videoTitle`       | `video-title` | Title of the video           | `string` | `'Youtube Video'` |
| `width`            | `width`       | Explicit width of the video  | `string` | `'100%'`          |


## CSS Custom Properties

| Name                                      | Description                                                                                                                                   |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `--youtube-video-bg-color`                | Background color of any padding around the placeholder image                                                                                  |
| `--youtube-video-icon-color`              | Color of the play icon @Prop --youtube-video-icon-size: Size of the play icon @Prop --youtube-video-icon-bg-size: Size of the icon background |
| `--youtube-video-icon-wrapper-background` | Background color of the icon background                                                                                                       |
| `--youtube-video-pointer`                 | Mouse pointer when hovering over the placeholder image                                                                                        |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
