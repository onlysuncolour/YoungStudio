"use client"
import styles from './index.module.css'
import SingleHeatmap from "@/components/heatmaps/single-heatmap"

export function Demo1 () {
  return <div className={styles.demo1}>
    <SingleHeatmap />
  </div>
}