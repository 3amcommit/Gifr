import Shape from "./shapes/shape";


export default class Frame {

    width: number;
    height: number;
    background:string;

    shapeList: Array<Shape>;

    constructor(width: number, height: number, background?:string) {
        this.width = width;
        this.height = height;
        this.background = background || "#FFF";
        this.shapeList = new Array<Shape>();
    }


    addElement(shape:Shape){
        this.shapeList.push(shape);
    }

    

    

}