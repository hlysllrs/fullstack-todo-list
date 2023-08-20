import { useState } from 'react'
import styles from './Checkout.module.scss'
import OrderDetail from '../../components/OrderDetail/OrderDetail'
import * as ordersAPI from '../../utilities/orders-api'
import * as usersAPI from '../../utilities/users-api'
import { useNavigate } from 'react-router-dom'
import SignUpForm from '../../components/SignUpForm/SignUpForm'

export default function Checkout({ user, setUser, cart, setCart, handleChangeQty }) {
  const [showSignUp, setShowSignUp] = useState(false)

  const navigate = useNavigate()

  async function handleCheckout() {
    await ordersAPI.checkout()
    setCart(null)
    if (user.name === 'c186ec') navigate('/orders')
  }

  function handleSignUpClick() {
    setShowSignUp(!showSignUp)
    if (showLogin) setShowLogin(!showLogin)
  }

  return (
    <div className={styles.Checkout}>
      <center>
        <h1>Checkout</h1>
        <OrderDetail order={cart} handleChangeQty={handleChangeQty} handleCheckout={handleCheckout} />

        {/* INSERT TOGGLE FORM ABOVE CHECKOUT BUTTON TO CREATE A USER */}
        {user.name === 'c186ec' &&
          <div>
            <span className={styles.showSignUpBtn} onClick={handleSignUpClick} >sign up for an account?</span>
          </div>
        }
        {showSignUp && user.name === 'c186ec' && <SignUpForm setUser={setUser} />}
        <button
          className="btn-sm"
          onClick={handleCheckout}
        >place order
        </button>
      </center>
    </div>
  )
}