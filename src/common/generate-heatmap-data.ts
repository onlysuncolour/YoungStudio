type Props = {
  count: number;
  minValue: number;
  maxValue: number;
  p1: TPoint;
  p2: TPoint;
  largeDataLocations?: TLargeDataLocation[];
}

function getRandamData(data1: number, data2: number) {
  const min = Math.min(data1, data2), max = Math.max(data1, data2), diff = max - min;
  return Number((Math.random() * diff + min).toFixed(1))
}

function getRandomCirclePoint(point: TPoint, radius: number) {
  var angle = Math.random() * Math.PI * 2;
  const randomRadius = getRandamData(0, radius)
  return {
    x: Math.cos(angle) * randomRadius + point.x,
    y: Math.sin(angle) * randomRadius + point.y
  }
}

function generateSquareMapData({
  count, minValue, maxValue, p1, p2
}: {
  count: number, minValue: number, maxValue: number, p1: TPoint, p2: TPoint
}) {
  let datas:THeatmapData[] = [], i = 0;
  while(i < count) {
    datas.push([
      getRandamData(p1.x, p2.x),
      getRandamData(p1.y, p2.y),
      getRandamData(minValue, maxValue)
    ])
    i++
  }
  return datas
}

function generateCircleMapData({
  count, minValue, maxValue, point, radius
}: {
  count: number, minValue: number, maxValue: number, point: TPoint, radius: number
}) {
  let datas:THeatmapData[] = [], i = 0;
  while (i < count) {
    const {
      x, y
    } = getRandomCirclePoint(point, radius)
    datas.push([
      x, y, getRandamData(minValue, maxValue)
    ])
    i++
  }
  return datas
}

export default function generateHeatmapData({
  count,
  minValue,
  maxValue,
  p1,
  p2,
  largeDataLocations = [],
}: Props) {
  let datas:THeatmapData[] = [];
  datas.push(...generateSquareMapData({
    count, minValue, maxValue, p1, p2
  }))
  largeDataLocations.forEach(l => {
    let {
      radius, point, shape, count: _count
    } = l
    if (shape === 'square') {
      let _p1 = {
        x: point.x - radius,
        y: point.x - radius
      }, _p2 = {
        x: point.x + radius,
        y: point.x + radius
      }
      datas.push(...generateSquareMapData({
        count: _count, minValue, maxValue, p1: _p1, p2: _p2
      }))
    } else {
      datas.push(...generateCircleMapData({
        count: _count, minValue, maxValue, point, radius
      }))
    }
  })
  return datas
}