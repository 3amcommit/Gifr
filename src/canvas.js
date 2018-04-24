import $ from "jquery";

class Canvas {
    constructor() {
        this.$elem =  $("<div id='canvas'>");
        this.$canvas = $("<canvas style='height:600px; width:800px;' id='Stage'>");
        this.$elem.append($("<div style='margin: 30px auto; width: 800px; display: block; height: 100%;'>").append(this.$canvas));


    }

    _init(){
        this.ctx = document.getElementById("Stage").getContext("2d");
        const ctx = this.ctx;
        this.height = this.$canvas.height();
        this.width = this.$canvas.width();


        ctx.fillStyle = "gray";
        ctx.fillRect(0,0,640,480);
        ctx.fillStyle = "red";
        ctx.stroke(Path2D.rect(0,0,0,0));
    }

    insertCircle(){
        console.log(this.$canvas);
        const ctx = this.ctx;
        ctx.fillStyle = "red";
        ctx.fillRect(this.width/2, this.height/2, 10, 10);
    }
}

const canvas = new Canvas();

export default canvas;
