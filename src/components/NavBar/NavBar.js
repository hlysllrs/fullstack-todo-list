import { Link } from "react-router-dom";
import styles from './NavBar.module.scss'

export default function NavBar({ props }) {

  return (
    <div className={styles.NavBar}>
      <Link to="/shop">Shop</Link>
      <div>Cart</div>
      <div>User</div>
    </div>
  )
}