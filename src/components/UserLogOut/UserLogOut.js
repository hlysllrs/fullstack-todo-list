import styles from './UserLogOut.module.scss'
import { useNavigate } from 'react-router-dom'
import { logOut, getUser } from '../../utilities/users-service'

export default function UserLogOut({ user, setUser, toggleShowUserPanel }) {
  const navigate = useNavigate()

  function handleLogOut() {
    // log out (automatically updates user to be previously saved guest user from localStorage)
    logOut()
      .then(() => {
        // set user to the guest user
        setUser(getUser())
        // close the user panel
        toggleShowUserPanel()
        // redirect to the home page
        navigate('/home')
      })
  }

  return (
    <div className={styles.UserLogOut}>
      <div>{user?.name}</div>
      <div className={styles.email}>{user?.email}</div>
      <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
    </div>
  )
}