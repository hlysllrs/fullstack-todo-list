import { Link } from "react-router-dom";
import styles from './NavBar.module.scss'

export default function NavBar({ user, toggleShowCart, toggleShowUserPanel, cart }) {

  return (
    <div className={styles.NavBar}>
      <Link to="/shop">shop</Link>
      <div onClick={toggleShowCart}>{cart ? `cart(${cart.totalQty})` : 'cart(0)'}</div>
      <div onClick={toggleShowUserPanel}>{user.name !== 'c186ec' ? user.name.toLowerCase() : 'log in'}</div>
    </div>
  )
}