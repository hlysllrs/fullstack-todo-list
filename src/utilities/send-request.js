import { getToken } from './users-service'

export default async function sendRequest(url, method = 'GET', payload = null) {
  // fetch takes an optional options object as the 2nd argument used to include a data payload, set headers, etc.
  const options = { method }
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' }
    options.body = JSON.stringify(payload)
  }
  const token = getToken()
  if (token) {
    // ensure headers object exists
    options.headers = options.headers || {}
    // add token to an Authorization header 
    // prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`
  }
  const res = await fetch(url, options)
  console.log(res)
  // res.ok will be false if the status code set to 4XX in the controller action
  if (res.ok) return res.json()
  throw new Error('Bad Request')
}