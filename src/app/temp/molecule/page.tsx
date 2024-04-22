"use client"

import { useRef, useState } from 'react'
import styles from './page.module.css'
import { workflowPipe } from './helper';

export default function Page() {
  const [msg, setMsg] = useState('hihihi')
  const [datas, setDatas] = useState([]);
  const [tasks, setTasks] = useState<any>({});

  const tastsLatest = useRef(tasks)
  function handleTaskStateChange(id: string, state:any) {
    if (!tastsLatest.current[id]) {
      tastsLatest.current[id] = {}
    }
    const task = tastsLatest.current[id]
    task.state = state;
    setTasks({
      ...tasks,
      id: task
    })
  }

  const handleDragEnter = () => {
    setMsg('dragEnter')
  }
  const handleDragOver = (e: any) => {
    setMsg('dragOver')
    e.preventDefault()
    e.stopPropagation();
  }
  const handleDragLeave = () => {
    setMsg('dragLeave')
  }
  const handleDrop = (e: any) => {
    e.preventDefault()
    e.stopPropagation();
    setMsg('drop')
    const uuid = crypto.randomUUID();
    workflowPipe(
      e.dataTransfer.items, 
      'handleFilesDrop', {
      handleStateChange: 
        (state:any) => handleTaskStateChange(uuid, state)}
    ).then()
  }
  return <div
    className={styles.page}
    onDragEnter={handleDragEnter}
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
    onDrop={handleDrop}
  >
    <div>you could drop file here to load data</div>
    <div>
      <span>or use S3 url:</span>
      <input />
      <button>download</button>
    </div>
    <div>
      <span>or other source url:</span>
      <input />
      <button>download</button>
      <button>source config</button>
    </div>
  </div>
}