import Shape from "./shapes/shape";
import { Dimension, toGrid, Transform } from "./util/util"

export default class Frame {

    static dimension: Dimension;
    background: string;
    grid: Map<number, Array<Shape>>;
    shapeList: Array<Shape>;

    constructor(background?: string) {
        this.background = background || "#FFF";
        this.shapeList = new Array<Shape>();
        this.grid = new Map<number, Array<Shape>>();
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.background;
        ctx.fillRect(Frame.centre().x, Frame.centre().y, Frame.dimension.width, Frame.dimension.height || Frame.dimension.width);
    }

    private _render(ctx: CanvasRenderingContext2D) {

    }
    addElement(shape: Shape): boolean {
        return this.shapeList.push(shape) > -1 && this.addToGrid(shape);
    }

    private addToGrid(shape: Shape): boolean {
        const generatedHash = toGrid(shape.getTransform, Frame.dimension)
        if (this.grid.has(generatedHash)) {
            return this.grid.get(generatedHash).push(shape) > -1;
        } else {
            return this.grid.set(generatedHash, new Array(shape)) != null;
        }
    }

    private static centre(): Transform {
        return { x: window.innerWidth / 2 - Frame.dimension.width / 2, y: window.innerHeight / 2 - (Frame.dimension.height ? Frame.dimension.height : Frame.dimension.width) / 2 }
    }
}