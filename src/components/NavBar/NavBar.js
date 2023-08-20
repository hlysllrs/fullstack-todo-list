import { Link } from "react-router-dom";
import styles from './NavBar.module.scss'

export default function NavBar({ toggleShowCart, toggleShowUserPanel, cart }) {

  // const cartQty = cart.totalQty

  return (
    <div className={styles.NavBar}>
      <Link to="/shop">Shop</Link>
      <div onClick={toggleShowCart}>{cart ? `Cart(${cart.totalQty})` : 'Cart(0)'}</div>
      <div onClick={toggleShowUserPanel}>User</div>
    </div>
  )
}