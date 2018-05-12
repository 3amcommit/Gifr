class MappedList {

}
export function toGrid(x: number, y: number, gridSize: number, frameWidth: number): number {
    const numBoxes = frameWidth/gridSize;

    return y*(frameWidth/gridSize) + x; 
}