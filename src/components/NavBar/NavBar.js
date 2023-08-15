import { Link } from "react-router-dom";
import styles from './NavBar.module.scss'

export default function NavBar({ routes, showCart, setShowCart, showUserPanel, setShowUserPanel }) {
  function handleCartClick() {
    setShowCart(!showCart)
  }

  function handleUserClick() {
    setShowUserPanel(!showUserPanel)
  }

  return (
    <nav className={styles.NavBar}>
      {routes.map(({ key, path }) => (
        <Link key={key} to={path}>
          {key}
        </Link>
      ))}
      <div onClick={handleCartClick}>
        Cart
      </div>
      <div onClick={handleUserClick}>
        User
      </div>
    </nav>
  )
}