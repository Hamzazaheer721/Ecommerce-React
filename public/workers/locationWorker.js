/* eslint-disable */

self.onmessage = (e) => {
  const { data } = e
  console.info('Worker: ', data)
  self.postMessage('hey whatsup')
}
