import { setInterval } from "timers";
import Rectangle from "./shapes/rectangle";

class GIFR {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor(){
        this.canvas = document.getElementById("mycanvas") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.setAttribute("width", window.innerWidth.toString());
        this.canvas.setAttribute("height", window.innerHeight.toString());
        const rect = new Rectangle(50,100,100,30, "FF0000");
        console.log(rect);
        setInterval(() => {
            this.ctx.clearRect(0,0,window.innerWidth, window.innerHeight)
            rect.render(this.ctx);
            this.ctx.fillStyle = "FFFFFF";
        },2000)

    }
}

new GIFR();
