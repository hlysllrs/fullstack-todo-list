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
      <div className={styles.userPanelHeading}>
        <span>{user.name === 'c186ec' ? showLogin === true ? 'log in' : 'sign up' : `hi ${user.name}`}</span>
        <button className={styles.closeBtn} onClick={toggleShowUserPanel}>close</button>
      </div>
      {user.name === 'c186ec' ? showLogin === true ?
        <div>
          <LoginForm setUser={setUser} />
          <span className={styles.signUpLogIn} onClick={() => setShowLogin(!showLogin)}>don't have an account?</span>
        </div>
        :
        <div>
          <SignUpForm setUser={setUser} />
          <span className={styles.signUpLogIn} onClick={() => setShowLogin(!showLogin)}>already have an account?</span>
        </div>
        :
        <div className={styles.userPanelOptions}>
          <div className={styles.linkContainer}>
            <Link to='/orders'>order history</Link>
            <Link to='/wishlist'>wishlist</Link>
          </div>
          <UserLogOut user={user} setUser={setUser} toggleShowUserPanel={toggleShowUserPanel} createGuestUser={createGuestUser} />
        </div>
      }
    </div >
  )
}