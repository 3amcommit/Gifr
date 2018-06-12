import { Transform, Dimension } from "../util/util";

export default abstract class Panel {
    transform:Transform;
    dimension:Dimension;

    constructor(transform:Transform, dimension:Dimension){
        this.transform = transform;
        this.dimension = dimension;
    }
    abstract render(ctx:CanvasRenderingContext2D):void;
} 