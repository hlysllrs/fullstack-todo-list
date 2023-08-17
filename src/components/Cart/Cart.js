import { useState } from 'react'
import styles from './Cart.module.scss'
import OrderDetail from '../OrderDetail/OrderDetail'

export default function Cart({ order, handleChangeQty, handleCheckout }) {
  return (
    <div className={styles.cartBackground}>
      <div className={styles.cartContainer}>
        <button>x</button>
        <h1>This is the Cart</h1>

        <OrderDetail className={styles.cart}
          order={order}
          handleChangeQty={handleChangeQty}
          handleCheckout={handleCheckout}
        />
        <button>checkout</button>
      </div>
    </div>
  )
}