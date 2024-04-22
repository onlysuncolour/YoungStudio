import path from "path";
import fs from "fs";

export async function POST(
  request: Request
) {
  const _path = path.resolve('public',  'mol-star.molj')

  const dataBuffer = await fs.readFileSync(_path)
  var stats = await fs.statSync(_path)
  var fileSizeInBytes = stats.size;
  return new Response(dataBuffer, {
    status: 200,
    headers: { 'Content-Length': `${fileSizeInBytes}` },
  })
}
export async function GET(
  request: Request
) {
  const _path = path.resolve('public',  'mol-star.molj')
  const dataBuffer = await fs.readFileSync(_path)
  var stats = await fs.statSync(_path)
  var fileSizeInBytes = stats.size;
  return new Response(dataBuffer, {
    status: 200,
    headers: { 'Content-Length': `${fileSizeInBytes}` },
  })
}