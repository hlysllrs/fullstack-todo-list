import { useState } from 'react'
import styles from './LoginForm.module.scss'
import * as usersService from '../../utilities/users-service'

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
    setError('')
  }

  async function handleSubmit(evt) {
    // prevent form from being submitted to the server
    evt.preventDefault()
    try {
      // the promise returned by the signUp service method will resolve to the user object included in the payload of the JWT
      const user = await usersService.login(credentials)
      setUser(user)
    } catch {
      setError('Log In Failed - Try Again')
    }
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">log in</button>
        </form>
      </div>
      <p className="error-message">{error}</p>
    </div>
  )
}

