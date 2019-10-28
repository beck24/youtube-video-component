import { Component, h, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'youtube-video',
  styleUrl: 'youtube-video.css',
  shadow: true
})
export class YoutubeVideo {
  @Prop() src!: string;
  // @Prop() videoId!: string;
  @Prop() width: number;
  @Prop() height: number;
  @State() played: boolean = false;
  @Element() el: HTMLElement;

  videoId: string;

  componentWillRender() {
    this.videoId = this.YouTubeGetID(this.src);
  }

  YouTubeGetID(url){
    url = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return undefined !== url[2] ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  }

  getContainerStyle() {
    const style: any = {
      width: '100%',
      height: '100%'
    };

    if (this.width) {
      style.width = `${this.width}px`;
    }

    if (this.height) {
      style.height = `${this.height}px`;
    }

    return style;
  }

  render() {
    const iframeProps = {
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: true,
      width: "100%",
      height: "100%",
      src: `https://www.youtube.com/embed/${this.videoId}?autoplay=1`,
      frameborder: "0",
      title: 'Youtube Video'
    };

    if (!this.videoId) {
      return null;
    }

    return (
      <div class="youtube-video" style={this.getContainerStyle()}>
        { this.played ?
          <iframe {...iframeProps} />

        :

          <a aria-label="Youtube Video" class="placeholder" onClick={() => { this.played = true }}>
            <img src={`https://i3.ytimg.com/vi/${this.videoId}/hqdefault.jpg`} class="placeholder" alt="Youtube Video" />

            <div class="icon-wrapper">
              <div class="icon-container">
                <svg class="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/></svg>
              </div>
            </div>
          </a>
        }
      </div>
    )
  }
}
