import { Link } from "react-router-dom";
import styles from './NavBar.module.scss'

export default function NavBar({ user, toggleShowCart, toggleShowUserPanel, cart, location }) {

  return (
    <div className={styles.NavBar}>
      <Link className={location.pathname === '/home' ? styles.whiteText : ''} to="/shop">shop</Link>
      <div className={location.pathname === '/home' ? styles.whiteText : ''} onClick={toggleShowCart}>{cart ? `cart(${cart.totalQty})` : 'cart(0)'}</div>
      <div className={location.pathname === '/home' ? styles.whiteText : ''} onClick={toggleShowUserPanel}>{user?.name !== 'c186ec' ? user.name.toLowerCase() : 'log in'}</div>
    </div>
  )
}