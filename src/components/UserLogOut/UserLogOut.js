import styles from './UserLogOut.module.scss'
import { logOut } from '../../utilities/users-service'

export default function UserLogOut({ user, createGuestUser, toggleShowUserPanel }) {

  function handleLogOut() {
    logOut()
    // close the user panel
    toggleShowUserPanel()
    // create a new guest user
    createGuestUser()
  }

  return (
    <div className={styles.UserLogOut}>
      <div>{user?.name}</div>
      <div className={styles.email}>{user?.email}</div>
      <button className="btn-sm" onClick={handleLogOut}>log out</button>
    </div>
  )
}