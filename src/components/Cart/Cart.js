import styles from './Cart.module.scss'
import LineItem from '../LineItem/LineItem'
import { useNavigate } from 'react-router-dom'

export default function Cart({ cart, handleChangeQty, handleCheckout, toggleShowCart }) {
  if (!cart) return null

  const navigate = useNavigate()

  const lineItems = cart.lineItems.map(item =>
    <LineItem
      lineItem={item}
      isPaid={cart.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  )

  function handleCheckoutClick() {
    toggleShowCart()
    navigate('/checkout')
  }

  return (
    <div className={styles.CartBackground}>
      <div className={styles.CartPanel}>
        <div className={styles.cartHeading}>
          <span className={styles.itemQty}>{`${cart.totalQty} item${cart.totalQty > 1 ? 's' : ''}`}</span>
          <button className={styles.closeBtn} onClick={toggleShowCart}>close</button>
        </div>
        <span className={styles.date}>{new Date(cart.updatedAt).toLocaleDateString()}</span>
        <div className={`${styles.lineItemContainer} scroll-y`}>
          {lineItems.length ?
            <>
              {lineItems}
              <section className={styles.total}>

                <span>${cart.orderTotal.toFixed(2)}</span>
                {!cart.isPaid &&
                  <button
                    className={styles.checkoutBtn}
                    onClick={handleCheckoutClick}
                    disabled={!lineItems.length}
                  >checkout
                  </button>
                }

              </section>
            </>
            :
            <div className={styles.empty}>your cart is empty.</div>
          }
        </div>
      </div>
    </div >
  )
}
