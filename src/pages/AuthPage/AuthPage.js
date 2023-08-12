import { useState } from 'react'
import styles from './AuthPage.module.scss'
import LoginForm from '../../components/LoginForm/LoginForm'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import Logo from '../../components/Logo/Logo'

export default function AuthPage({ setUser }) {
  /* ----- State ----- */
  const [showLogin, setShowLogin] = useState(true)

  /* ----- Rendered UI ----- */
  return (
    <main className={styles.AuthPage}>
      <div>
        <Logo />
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  )
}