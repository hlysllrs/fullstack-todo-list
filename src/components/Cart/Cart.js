import { useState } from 'react'
import styles from './Cart.module.scss'

export default function Cart({ props }) {
  return (
    <div className={styles.cartBackground}>
      <div className={styles.cartContainer}>
        <button>x</button>
        <h1>This is the Cart</h1>
        <button>checkout</button>
      </div>
    </div>
  )
}