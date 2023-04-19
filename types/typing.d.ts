type;
type Draw = {
  context: CanvasRenderingContext2D;
  currentPoint: Point;
  prevPoint: Point | null; // why not || ?????
};

type Point = { x: number; y: number };
