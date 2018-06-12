import { Dimension, Transform, noop } from "../util/util";

export default class CanvasBtn{
    onClick:Function;
    title:string;
    dimension: Dimension;
    transform: Transform;

    constructor(title:string, transform:Transform, dimension:Dimension, onClick?:Function){
        this.onClick = onClick;
        this.title = title;
        this.dimension = dimension;
        this.transform = transform;
    }

    render(ctx:CanvasRenderingContext2D){
        ctx.fillStyle="#f00";
        ctx.fillRect(0,0,this.dimension.width, this.dimension.height || this.dimension.width)
        ctx.fillStyle="#ff0";
        ctx.font = '32px serif';
        ctx.textBaseline='top'
        ctx.fillText(this.title, 0,0, this.dimension.width);
    }

    onHover(event:MouseEvent){
        noop();
    }

}

