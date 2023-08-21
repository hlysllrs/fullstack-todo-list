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
      <div className={styles.userInfo}>
        <div>{user?.name}</div>
        <div className={styles.email}>{user?.email}</div>
      </div>
      <button className={styles.logOutBtn} onClick={handleLogOut}>log out</button>
    </div>
  )
}