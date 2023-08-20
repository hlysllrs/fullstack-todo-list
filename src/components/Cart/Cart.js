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
        <div className={styles.sectionHeading}>
          {cart.isPaid ?
            <span>ORDER<span className="smaller">{cart.orderId}</span></span>
            :
            <span>NEW ORDER </span>
          }
          <span>{new Date(cart.updatedAt).toLocaleDateString()}</span>
        </div>
        <div className={`${styles.lineItemContainer} flex-ctr-ctr flex-col scroll-y`}>
          {lineItems.length ?
            <>
              {lineItems}
              <section className={styles.total}>
                {cart.isPaid ?
                  <span className={styles.right}>TOTAL&nbsp;&nbsp;</span>
                  :
                  <button
                    className="btn-sm"
                    onClick={handleCheckoutClick}
                    disabled={!lineItems.length}
                  >checkout
                  </button>
                }
                <span>{cart.totalQty}</span>
                <span className={styles.right}>${cart.orderTotal.toFixed(2)}</span>
              </section>
            </>
            :
            <div className={styles.empty}>your cart is empty.</div>
          }
        </div>
        <button className="btn-sm" onClick={toggleShowCart}>close</button>
      </div>
    </div >
  )
}



// import { useState } from 'react'
// import styles from './Cart.module.scss'
// import OrderDetail from '../OrderDetail/OrderDetail'

// export default function Cart({ order, handleChangeQty, handleCheckout }) {
//   return (
//     <div className={styles.cartBackground}>
//       <div className={styles.cartContainer}>
//         <button>x</button>
//         <h1>This is the Cart</h1>

//         <OrderDetail className={styles.cart}
//           order={order}
//           handleChangeQty={handleChangeQty}
//           handleCheckout={handleCheckout}
//         />
//         <button>checkout</button>
//       </div>
//     </div>
//   )
// }