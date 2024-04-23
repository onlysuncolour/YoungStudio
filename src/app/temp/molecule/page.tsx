"use client"

import { useRef, useState } from 'react'
import styles from './page.module.css'
import { getInitOptions, validUrl, workflowPipe } from './helper';
import { message } from '@/components/message';

export default function Page() {

  const [datas, setDatas] = useState([]);
  const [tasks, setTasks] = useState<any>([]);

  const [s3Url, setS3Url] = useState('')
  const [url, setUrl] = useState('')

  const tasksLatest = useRef(tasks)

  function handleTaskStateChange(options: any, state: any) {
    let index = options.index
    if (index === undefined) {
      index = options.index = tasksLatest.current.length
    }
    const task = tasksLatest.current[index] || {id: index, state: {}}
    task.state = {
      ...task.state,
      ...state
    };
    tasksLatest.current[index] = {...task}
    setTasks([...tasksLatest.current])
  }

  function handleS3UrlClick() {
    if (!validUrl(s3Url)) {
      message('s3url is not a url!')
      return;
    }
    workflowPipe(
      s3Url,
      's3Url', 
      getInitOptions({handleTaskStateChange})
    )
  }
  function handleUrlClick() {
    if (!validUrl(url)) {
      message('url is not a url!')
      return;
    }
    workflowPipe(
      url,
      'otherUrl', 
      getInitOptions({handleTaskStateChange})
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
    workflowPipe(
      e.dataTransfer.files, 
      'handleFilesDrop', 
      getInitOptions({handleTaskStateChange})
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
      {
        // @ts-ignore
        tasks.map(({id, state}, i:number) => {
          return <div key={i}>
            task {i}:
            from - {state.from} {state.host || ''} 
            status - [{state.status || ''}],
            msg - [{state.msg || ''}],
            {/* data - {t.data} */}
          </div>
        })
      }
    </div>
  </div>
}

