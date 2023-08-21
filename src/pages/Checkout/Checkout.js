import { useState } from 'react'
import styles from './Checkout.module.scss'
import OrderDetail from '../../components/OrderDetail/OrderDetail'
import * as ordersAPI from '../../utilities/orders-api'
import { useNavigate } from 'react-router-dom'
import SignUpForm from '../../components/SignUpForm/SignUpForm'

export default function Checkout({ user, setUser, order, setCart, handleChangeQty, location }) {
  const [showSignUp, setShowSignUp] = useState(false)

  const navigate = useNavigate()

  async function handleCheckout() {
    await ordersAPI.checkout()
    setCart(null)
    navigate('/orders')
  }

  function handleSignUpClick() {
    setShowSignUp(!showSignUp)
  }

  return (
    <div className={styles.Checkout}>
      <OrderDetail className={styles.orderDetail} order={order} handleChangeQty={handleChangeQty} handleCheckout={handleCheckout} location={location} />
      <div className={styles.checkoutInfo}>
        {order &&
          <section className={styles.total}>
            <span className={styles.totalQty}>{`${order.totalQty} item${order.totalQty !== 1 ? 's' : ''}`}</span>
            <span className={styles.totalPrice}>${order.orderTotal.toFixed(2)}</span>
          </section>}
        {/* if user is a guest, show option to sign up for an account */}
        <div className={styles.signUp}>
          {user.name === 'c186ec' &&
            <div>
              <span className={styles.showSignUpBtn} onClick={handleSignUpClick} >sign up for an account?</span>
            </div>
          }
          {showSignUp && user.name === 'c186ec' && <SignUpForm setUser={setUser} />}
        </div>
        <button
          className={styles.checkoutBtn}
          onClick={handleCheckout}
        >place order
        </button>
      </div>
    </div>
  )
}