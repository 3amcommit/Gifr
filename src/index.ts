import { setInterval } from "timers";
import Rectangle from "./components/shapes/rectangle";
import Frame from "./components/frame";
import ComponentsPanel from "./components/panels/componentsPanel";
import { mouseBoxInteresect } from "./components/util/util";
import MouseInteractions from "./components/util/clickable";
export const canvas = document.getElementById("mycanvas") as HTMLCanvasElement;
let gifr: GIFR;
class GIFR implements MouseInteractions{
    ctx: CanvasRenderingContext2D;
    frames: Array<Frame>;
    componentsPanel: ComponentsPanel;

    constructor() {
        this.ctx = canvas.getContext("2d");
        // this.canvas.setAttribute("style", `height:${window.innerHeight.toString()} px; width:${window.innerWidth.toString()}`);
        this.componentsPanel = new ComponentsPanel({ x: 0, y: 0 }, { width: 150, height: window.innerHeight });
        this.frames = new Array<Frame>();
        Frame.dimension = { width: 800, height: 600 };
        this.frames.push(new Frame());
    }

    render() {
        this.componentsPanel.render(this.ctx);

        this.frames[0].render(this.ctx);
    }

    onMouseOver(event: MouseEvent) {
        if (mouseBoxInteresect({ x: event.clientX, y: event.clientY }, this.componentsPanel.transform, this.componentsPanel.dimension)) {
            this.componentsPanel.onMouseOver(event);
        }
    }

    onMouseDown(event: MouseEvent) {
        if (mouseBoxInteresect({ x: event.clientX, y: event.clientY }, this.componentsPanel.transform, this.componentsPanel.dimension)) {
            this.componentsPanel.onMouseOver(event);
        }
    }
}

window.onresize = (event) => {
    canvas.setAttribute("width", window.innerWidth.toString());
    canvas.setAttribute("height", window.innerHeight.toString());
    // this.canvas.setAttribute("style", `height:${window.innerHeight.toString()} px; width:${window.innerWidth.toString()}`);
    gifr.render();
};
(() => {
    canvas.setAttribute("width", window.innerWidth.toString());
    canvas.setAttribute("height", window.innerHeight.toString());
    gifr = new GIFR();
    gifr.render();
})();

canvas.onmousemove = (event) => {
    canvas.style.cursor = "default";
    gifr.onMouseOver(event);
}

canvas.onmousedown = (event) => {
    gifr.onMouseDown(event);
}