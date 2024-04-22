"use client"

import { useRef, useState } from 'react'
import styles from './page.module.css'
import { validUrl, workflowPipe } from './helper';
import { message } from '@/components/message';

export default function Page() {

  const [datas, setDatas] = useState([]);
  const [tasks, setTasks] = useState<any>({});

  const [s3Url, setS3Url] = useState('')
  const [url, setUrl] = useState('')

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

  function handleS3UrlClick() {
    if (!validUrl(s3Url)) {
      message('s3url is not a url!')
      return;
    }
    const uuid = crypto.randomUUID();
    workflowPipe(
      s3Url,
      's3Url', {
      handleStateChange: 
        (state:any) => handleTaskStateChange(uuid, state)}
    )
  }
  function handleUrlClick() {
    if (!validUrl(url)) {
      message('url is not a url!')
      return;
    }
    const uuid = crypto.randomUUID();
    workflowPipe(
      url,
      'otherUrl', {
      handleStateChange: 
        (state:any) => handleTaskStateChange(uuid, state)}
    )
  }
  const handleDragEnter = () => {}
  const handleDragLeave = () => {}

  const handleDragOver = (e: any) => {
    e.preventDefault()
    e.stopPropagation();
  }
  const handleDrop = (e: any) => {
    e.preventDefault()
    e.stopPropagation();
    const uuid = crypto.randomUUID();
    workflowPipe(
      e.dataTransfer.items, 
      'handleFilesDrop', {
      handleStateChange: 
        (state:any) => handleTaskStateChange(uuid, state)}
    )
  }
  return <div
    className={styles.page}
    onDragEnter={handleDragEnter}
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
    onDrop={handleDrop}
  >
    <div>
      <div>you could drop file here to load data</div>
      <div>
        <span>or use S3 url:</span>
        <input value={s3Url} onChange={e => setS3Url(e.target.value)} />
        <button onClick={handleS3UrlClick}>download</button>
      </div>
      <div>
        <span>or other source url:</span>
        <input value={url} onChange={e => setUrl(e.target.value)} />
        <button onClick={handleUrlClick}>download</button>
        <button>source config</button>
      </div>
    </div>
    <div>
      
    </div>
  </div>
}

