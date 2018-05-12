export default abstract class Shape {

    protected x: number;
    protected y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    abstract render(ctx: CanvasRenderingContext2D): void;

    abstract translate(x: number, y: number): void;

    abstract onSelected(ctx: CanvasRenderingContext2D): void

    abstract scale(factorX: number, factorY?: number): void
}