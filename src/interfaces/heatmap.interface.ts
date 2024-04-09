type TPoint = {
  x: number;
  y: number
}

type TLargeDataLocation = {
  point: TPoint;
  shape: 'square' | 'circle';
  radius: number
  count: number
}

type THeatmapData = number[]