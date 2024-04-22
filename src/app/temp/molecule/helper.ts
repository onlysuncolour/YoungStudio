import validateSchema from "./schema"

export async function workflowPipe(data: any, flow: string, options?: any):Promise<any> {
  if (flow === 'handleFilesDrop') {
    return handleFilesDrop(data, options)
  }
  if (flow === 's3Url') {
    return handleS3Url(data, options)
  }
  if (flow === 'otherUrl') {
    return handleOtherUrl(data, options)
  }
  if (flow === 'fileParse') {
    return fileParse(data, options)
  }
  if (flow === 'validateData') {
    return validateData(data, options)
  }
  if (flow === 'renderData') {

  }
  if (flow === 'error') {
    
  }
  return true
}

async function handleS3Url(data: string, options?: any){
  return handleUrlFetch({url: data}, {
    ...options,
    url: 's3'
  })
}

async function handleOtherUrl(data: string, options?: any) {
  return handleUrlFetch({
    url: '/api/fetchDataByUrl',
    options: {
      method: "POST",
      body: {url: data},
    }
  }, {
    ...options,
    url: 's3'
  })
}

async function handleUrlFetch(data: any, options?: any) {
  return new Promise(res => {
    let bufferData:any, length: number;
    const request = new Request(data.url, data.options)
    fetch(request).then(function(response) {
      length = Number(response.headers.get("content-length"));
      return response.arrayBuffer();
    }).then(function(chunk) {
      if (!bufferData) {
        bufferData = chunk;
      } else {
        bufferData = Buffer.concat([bufferData, chunk]);
      }
      options?.handleStateChange?.(`load data from url: ${bufferData?.length}/${length}`)
    }).finally(async () => {
      options?.handleStateChange?.(`load data from url: done`);
      const respData = await bufferData.toString('utf8');
      res(workflowPipe(respData, 'validateData', options))
    })
  })
}

async function handleFilesDrop(data: any, options?: any) {
  if (data?.files?.length > 1) {
    return Promise.all(data?.files.map((file: any) => workflowPipe(file, 'fileParse', options)))
  }
  return workflowPipe(data.files[0], 'fileParse', options)
}

const FileFormatMap = [
  {format: '.zip', parse: unzipFile},
  {format: '.molx', parse: readFile},
  {format: '.molj', parse: readFile},
]

async function fileParse(data: any, options?: any) {
  const filename = data.name.toLowerCase();
  for (let i = 0; i < FileFormatMap.length; i++) {
    const {format, parse} = FileFormatMap[i];
    if (filename.endsWith(format)) {
      return parse(data, options)
    }
  }
  return {
    err: 'unsupport file format'
  }
}

async function readFile(data: any, options?: any){
  const result = await asyncResp("file content string")
  return workflowPipe(result, 'parseData', options)
}

async function unzipFile(data:any, options?: any) {
  const files = await asyncResp([{name: 'a'}, {name: 'b'}, {name: 'c'}])
  return Promise.all(files.map((file:any) => workflowPipe(file, 'fileParse', options)))
}

function asyncResp(data: any, t = 500):Promise<any> {
  return new Promise((res) => {
    setTimeout(() => {
      res(data)
    }, t)
  })
}

function validateData(data: any, options?: any) {
  if (!validateSchema(data)) {
    return workflowPipe('data is not correct!', 'error', options)
  }
  return workflowPipe(data, 'renderData', options)
}
