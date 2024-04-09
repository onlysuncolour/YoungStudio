"use client"

import generateHeatmapData from '@/common/generate-heatmap-data'
import styles from './index.module.css'
import HeatMap from 'react-easy-heatmap'
import 'react-easy-heatmap/dist/index.css'

export default function SingleHeatmap() {
  const data = generateHeatmapData({
    count: 100,
    minValue: 10,
    maxValue: 100,
    p1: {x: 0, y: 0},
    p2: {x: 200, y: 200},
    largeDataLocations: [
      {
        point: {x: 40, y: 40},
        count: 100,
        radius: 10,
        shape: 'square'
      }, {
        point: {x: 140, y: 140},
        count: 100,
        radius: 20,
        shape: 'circle'
      }, 
    ]
  })
  const mapData = {
    image: '/zelda-map.png',
    imgSize: {
      x: 1386, 
      y: 1208,
    },
    coordinate: {
        p1: {
          x: 0,
          y: 0
        },
        p2: {
          x: 200,
          y: 200
        }
    }
  }
  
  return <div className={styles.root}>
    <HeatMap data={data}
    // @ts-ignore
      mapFile={mapData}
    />
  </div>
}