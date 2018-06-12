import { Transform } from "../util/util";

export default abstract class Shape {

    protected transform: Transform;

    constructor(transform:Transform) {
        this.transform = transform;
    }

    get getTransform(): Transform {
        return this.transform;
    }

    abstract render(ctx: CanvasRenderingContext2D): void;

    abstract translate(transform:Transform): void;

    abstract onSelected(ctx: CanvasRenderingContext2D): void

    abstract scale(factorX: number, factorY?: number): void

}
