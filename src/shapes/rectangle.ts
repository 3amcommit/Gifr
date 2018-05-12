import Shape from './shape';

export default class Rectangle extends Shape {

    width: number;
    height: number;
    color: string;


    constructor(x: number, y: number, width: number, height?: number, color?: string) {
        super(x, y);
        this.width = width;
        this.height = height;
        this.color = color;
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

    }

    translate(x: number, y: number) {
        this.x += x;
        this.y += y;
    }

    scale(factor: number) {
        this.width *= factor;
        this.height *= factor;
    }

    onSelected(ctx: CanvasRenderingContext2D) {
        throw new Error("NOT YET IMPLEMENTED");
    }

}