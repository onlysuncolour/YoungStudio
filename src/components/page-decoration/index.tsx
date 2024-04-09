"use client"

import { CSSProperties, useEffect, useState } from 'react'
import styles from './index.module.css'
import { getRandom, getRandom3 } from '@/utils'

const ColorMap = {
  0: '#ddebc7',
  1: '#fbc6ef',
  2: '#f0d3e5',
  3: '#fce7ba',
  4: '#89d481'
}

export default function PageDecoration() {
  const [rootStyle, setRootStyle] = useState<CSSProperties>({})
  const [maxHeight, setMaxHeight] = useState(0)
  const [maxWidth, setMaxWidth] = useState(0)
  const [items, setItems] = useState<TDecorationItem[]>([])

  useEffect(() => {
    var html = document.getElementsByTagName('html')[0]
    setMaxWidth(html.offsetWidth)
    setMaxHeight(html.offsetHeight / 2)
    function handleWindowResize() {
      setMaxWidth(html.offsetWidth)
      setMaxHeight(html.offsetHeight / 2)
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  // useEffect(() => {
  //   setMaxHeight(Math.sqrt(maxWidth));
  // }, [maxWidth])

  useEffect(() => {
    setRootStyle({
      height: maxHeight,
      width: maxWidth
    })
    if (maxHeight === 0) {
      setItems([])
    } else {
      const maxRadius = maxHeight / 10, minRadius = maxHeight / 20;
      const p = (maxWidth ** 3) / maxHeight
      setItems(Array.from({length: 500}).map(_ => {
        let radius = getRandom(minRadius, maxRadius), right = getRandom3(-radius/2, maxWidth), maxTop = (right ** 3) / p, top = getRandom(-radius/2, maxTop);
        return {
          right,
          top,
          radius
        }
      }))
    }

  }, [maxHeight, maxWidth])

  return <div className={styles.root} style={rootStyle} >
    {
      items.map(({right, top, radius}, i) => <DecorationItem right={right} top={top} radius={radius} key={i} />)
    }
  </div>
}

function DecorationItem({right, top, radius}: TDecorationItem) {
  const [bgColorIndex, setBgColorIndex] = useState<any>(Math.floor(getRandom(0, 4)));

  return <div
    className={styles.decorationItem}
    style={{
      right, 
      top, 
      width: radius, 
      height: radius, 
      borderRadius: radius,
      // @ts-ignore
      backgroundColor: ColorMap[bgColorIndex]
    }}
    onMouseEnter={_ => {
      setBgColorIndex(bgColorIndex === 4 ? 0 : bgColorIndex + 1)
    }}
  />
}