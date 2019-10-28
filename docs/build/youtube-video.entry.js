import { r as registerInstance, h, c as getElement } from './core-5650e662.js';

const YoutubeVideo = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.width = '100%';
        this.height = '100%';
        this.videoTitle = 'Youtube Video';
        this.played = false;
    }
    componentWillRender() {
        this.videoId = this.YouTubeGetID(this.src);
    }
    YouTubeGetID(url) {
        url = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        return undefined !== url[2] ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
    }
    getContainerStyle() {
        const style = {
            width: '100%',
            height: '100%'
        };
        if (this.width) {
            style.width = `${this.width}`;
        }
        if (this.height) {
            style.height = `${this.height}`;
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
            title: this.videoTitle
        };
        if (!this.videoId) {
            return null;
        }
        return (h("div", { class: "youtube-video", style: this.getContainerStyle() }, this.played ?
            h("iframe", Object.assign({}, iframeProps))
            :
                h("a", { "aria-label": this.videoTitle, class: "placeholder", onClick: () => { this.played = true; } }, h("img", { src: `https://i3.ytimg.com/vi/${this.videoId}/hqdefault.jpg`, class: "placeholder", alt: "Youtube Video" }), h("div", { class: "icon-wrapper" }, h("div", { class: "icon-container" }, h("svg", { class: "play", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { d: "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" })))))));
    }
    get el() { return getElement(this); }
    static get style() { return "/**\n * \@prop --youtube-video-bg-color: Background color of any padding around the placeholder image\n * \@prop --youtube-video-pointer: Mouse pointer when hovering over the placeholder image\n * \@prop --youtube-video-icon-wrapper-background: Background color of the icon background\n * \@prop --youtube-video-icon-color: Color of the play icon\n * \@Prop --youtube-video-icon-size: Size of the play icon\n * \@Prop --youtube-video-icon-bg-size: Size of the icon background\n */\n\n.youtube-video {\n  background-color: var(--youtube-video-bg-color, black);\n}\n\n.placeholder {\n  width: 100%;\n  height: 100%;\n  cursor: var(--youtube-video-pointer, pointer);\n  position: relative;\n}\n\na.placeholder {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.icon-wrapper {\n  position: relative;\n  width: var(--youtube-video-icon-bg-size, 35%);\n  padding-bottom: var(--youtube-video-icon-bg-size, 35%);\n  background-color: var(--youtube-video-icon-wrapper-background, rgba(0, 0, 0, 0.5));\n  border-radius: 50%;\n  z-index: 1;\n}\n\n.icon-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\nimg.placeholder {\n  position: absolute;\n  -o-object-fit: contain;\n  object-fit: contain;\n}\n\n.play {\n  position: absolute;\n  height: auto;\n  width: var(--youtube-video-icon-size, 35%);\n  fill: var(--youtube-video-icon-color, white);\n}"; }
};

export { YoutubeVideo as youtube_video };
