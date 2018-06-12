import Shape from './shape';
import { Dimension, Transform } from '../util/util';

export default class Rectangle extends Shape {

    dimension:Dimension;
    color: string;


    constructor(transform:Transform, dimension: Dimension, color?: string) {
        super(transform);
        this.dimension = dimension;
        this.color = color;
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.transform.x,this.transform.y, this.dimension.width,this.dimension.height || this.dimension.width);

    }

    translate(transform: Transform) {
        this.transform.x += transform.x;
        this.transform.y += transform.y;
    }

    scale(factor: number) {
        this.dimension.width *= factor;
        this.dimension.height *= factor;
    }

    onSelected(ctx: CanvasRenderingContext2D) {
        throw new Error("NOT YET IMPLEMENTED");
    }

}