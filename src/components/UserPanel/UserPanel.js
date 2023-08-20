import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './UserPanel.module.scss'
import LoginForm from '../LoginForm/LoginForm'
import SignUpForm from '../SignUpForm/SignUpForm'
import UserLogOut from '../UserLogOut/UserLogOut'

export default function UserPanel({ user, setUser, toggleShowUserPanel, createGuestUser }) {
  const [showLogin, setShowLogin] = useState(true)


  return (
    <div className={styles.UserPanel}>

      <h1>log in</h1>
      {user.name === 'c186ec' ? showLogin === true ?
        <>
          <LoginForm setUser={setUser} />
          <div>
            <h3>don't have an account?</h3>
            <button onClick={() => setShowLogin(!showLogin)}>Sign Up</button>
          </div>
        </>
        :
        <>
          <SignUpForm setUser={setUser} />
          <div>
            <h3>already have an account?</h3>
            <button onClick={() => setShowLogin(!showLogin)}>Log In</button>
          </div>
        </>
        :
        <>
          <h2>welcome back</h2>
          <Link to='/orders'>order history</Link>
          <Link to='/wishlist'>wishlist</Link>
          <UserLogOut user={user} setUser={setUser} toggleShowUserPanel={toggleShowUserPanel} createGuestUser={createGuestUser} />
        </>
      }
      <button className="btn-sm" onClick={toggleShowUserPanel}>close</button>
    </div>
  )
}