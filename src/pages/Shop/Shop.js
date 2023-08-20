import { useState, useEffect, useRef } from 'react'
import * as itemsAPI from '../../utilities/items-api'
import * as ordersAPI from '../../utilities/orders-api'
import styles from './Shop.module.scss'
import MenuList from '../../components/MenuList/MenuList'
import CategoryList from '../../components/CategoryList/CategoryList'

export default function Shop({ user, setUser, cart, setCart }) {
  /* ----- State ----- */
  const [menuItems, setMenuItems] = useState([])
  const [activeCat, setActiveCat] = useState('')

  const categoriesRef = useRef([])

  /* ----- Effects ----- */
  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll()
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name
        return cats.includes(cat) ? cats : [...cats, cat]
      }, [])
      setMenuItems(items)
      setActiveCat(categoriesRef.current[0])
    }
    getItems()
    async function getCart() {
      const cart = await ordersAPI.getCart()
      setCart(cart)
    }
    getCart()
  }, [])

  /* ----- Event Handlers ===== */
  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addItemToCart(itemId)
    setCart(updatedCart)
  }

  /* ----- Rendered UI ----- */
  return (
    <main className={styles.Shop}>
      <div>
        <CategoryList
          categories={categoriesRef.current}
          cart={setCart}
          setActiveCat={setActiveCat}
        />
      </div>
      <MenuList
        menuItems={menuItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
    </main>
  )
}