import { useState } from 'react'
import styles from './SignUpForm.module.scss'
import { updateUser } from '../../utilities/users-service'

export default function SignUpForm({ setUser }) {
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  })
  const [error, setError] = useState('')

  function handleChange(e) {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value })
    setError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const formData = { ...signUpData }
      delete formData.confirm
      // the promise returned by the signUp service method will resolve to the user object included in the payload of the JWT
      const updatedUser = await updateUser(formData)
      // set user state to the updated user
      setUser(updatedUser)
    } catch {
      // an error happened on the server
      setError('sign up failed - try again')
    }
  }

  const disable = signUpData.password !== signUpData.confirm

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>name</label>
          <input type="text" name="name" value={signUpData.name} onChange={handleChange} required />
          <label>email</label>
          <input type="text" name="email" value={signUpData.email} onChange={handleChange} required />
          <label>password</label>
          <input type="password" name="password" value={signUpData.password} onChange={handleChange} required />
          <label>confirm</label>
          <input type="password" name="confirm" value={signUpData.confirm} onChange={handleChange} required />
          <button type="submit" disabled={disable}>sign up</button>
        </form>
      </div>
      <p className="error-message">{error}</p>
    </div>
  )
}