function iteratorToStream(url: string) {
  const dataStream = fetchData(url);
  let streamNext = dataStream.next
  return new ReadableStream({
    async pull(controller) {
      // @ts-ignore
      const { chunk, done, next } = await streamNext
      streamNext = next;
      controller.enqueue(Buffer.from(chunk))
      if (done) {
        setTimeout(() => {
          controller.close()
        }, 1000)
      }
    },
  })
}

function fetchData(url: string) {
  let res:any, length = 0, curLength = 0;
  function nextResHandler(resFn: any) {
    res = resFn
  }
  fetch(url).then(function(response) {
    length = Number(response.headers.get("content-length")) || 0;
    return response.arrayBuffer();
  }).then(function(chunk) {
    curLength += chunk.byteLength;
    res({
      chunk,
      next: new Promise(res => nextResHandler(res)),
      done: curLength >= length
    })
  })
  return {next: new Promise(res => nextResHandler(res))}
}
 
export async function POST() {
  const stream = iteratorToStream('http://localhost:3000/api/fetchDataByUrl')
  return new Response(stream)
}