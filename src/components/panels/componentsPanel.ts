import Panel from "./panel";
import CanvasBtn from "./canvasBtn";
import { noop, Dimension, Transform, mouseBoxInteresect } from "../util/util";
import { canvas } from "../..";

export default class ComponentsPanel extends Panel {

    buttons: Array<CanvasBtn>

    constructor(transform: Transform, dimension: Dimension) {
        super(transform, dimension);
        this.buttons = new Array<CanvasBtn>();
        this.buttons.push(new CanvasBtn("my button", {x:0,y:0},{ width: 150, height: 75 }, noop))
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "#eee";
        ctx.fillRect(this.transform.x, this.transform.y, this.dimension.width, this.dimension.height || this.dimension.width);
        this.buttons.forEach(btn => {
            btn.render(ctx);
        });
    }

    onMouseOver(event: MouseEvent) {
        this.buttons.forEach(btn => {
            if(mouseBoxInteresect({ x: event.clientX, y: event.clientY }, btn.transform, btn.dimension)){
                canvas.style.cursor = "pointer";
            }

        })
    }
}