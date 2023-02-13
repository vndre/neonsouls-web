export class Grid2D {
  constructor(width, height, components) {
    this.points = new Float32Array(width * height * components);
    this.width = width;
    this.height = height;
    this.components = components;
  }
}
export function iterateGrid2D(grid, callback) {
  const { width, points, components } = grid;
  const height = grid.points.length / width / components;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * components;
      callback(points, x, y, i);
    }
  }
}
