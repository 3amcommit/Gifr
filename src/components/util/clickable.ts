import { mouseBoxInteresect } from "./util";
import Shape from "../shapes/shape";

export default abstract class MouseInteractions {
    clickables: Array<MouseInteractions & Shape>;

    onMouseOver(event: MouseEvent & Shape): void {
        this.clickables.forEach(element => {
            if (mouseBoxInteresect({ x: event.clientX, y: event.clientY }, element.getTransform, element.)) {
                this.componentsPanel.onMouseOver(event);
            }
        });
    }
}