import { ENOPROTOOPT } from "constants";

export function toGrid(transform: Transform, dimension: Dimension): number {

    if (transform.x > dimension.width) throw new Error("Expected x to be less than width");
    if (transform.y > dimension.height) throw new Error("Expected y to be less than height");
    return transform.y * dimension.width + transform.x;
}

export type Transform = {
    x: number;
    y: number;
}

export type Dimension = {
    width: number,
    height?: number
}

export const noop = (): void => console.log("noop");

export const mouseBoxInteresect = (mouseLoc: Transform, transform: Transform, dimension: Dimension): boolean => mouseLoc.x >= transform.x && mouseLoc.x <= transform.x + dimension.width && mouseLoc.y >= transform.y && mouseLoc.y <= (dimension.height || dimension.width); 