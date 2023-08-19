import styles from './Cart.module.scss'
import LineItem from '../LineItem/LineItem'

export default function Cart({ order, handleChangeQty, handleCheckout }) {
  if (!order) return null

  const lineItems = order.lineItems.map(item =>
    <LineItem
      lineItem={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  )

  return (
    <div className={`${styles.Cart} cart`}>

      <div className={styles.sectionHeading}>
        {order.isPaid ?
          <span>ORDER<span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER </span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className={`${styles.lineItemContainer} flex-ctr-ctr flex-col scroll-y`}>
        {lineItems.length ?
          <>
            {lineItems}
            <section className={styles.total}>
              {order.isPaid ?
                <span className={styles.right}>TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >CHECKOUT
                </button>
              }
              <span>{order.totalQty}</span>
              <span className={styles.right}>${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className={styles.hungry}>Hungry?</div>
        }
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