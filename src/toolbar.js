import $ from "jquery";

import Button from "./components/button";
import canvas from "./canvas";


class Toolbar {
    constructor(props) {
        this.$elem = $("<div id='toolbar'>");
        this.$elem.append(new Button({
            name:"Add a circle",
            cb: function (params) {
                canvas.insertCircle();
            } 
        }));
    }

}

export default new Toolbar().$elem;
