import React, { useState, useEffect, useReducer } from 'react'
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import styles from './App.module.scss'
import Home from '../Home/Home'
import Shop from '../Shop/Shop'
import Checkout from '../Checkout/Checkout'
import OrderHistory from '../OrderHistory/OrderHistory'
import Wishlist from '../Wishlist/Wishlist'
import Logo from '../../components/Logo/Logo'
import NavBar from '../../components/NavBar/NavBar'
import UserPanel from '../../components/UserPanel/UserPanel'
import Cart from '../../components/Cart/Cart'
import { getUser, signUp } from '../../utilities/users-service'
import * as ordersAPI from '../../utilities/orders-api'
import { createPortal } from 'react-dom'

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'toggleCart':
//       return { ...state, showCart: !state.showCart }
//     case 'toggleUserPanel':
//       return { ...state, showUserPanel: !state.showUserPanel }
//     default:
//       throw new Error()
//   }
// }

const ACTIONS = {
  TOGGLE_CART: 'toggleCart',
  TOGGLE_USER_PANEL: 'toggleUserPanel',
  SET_USER: 'setUser',
  UPDATE_CART: 'updateCart',

}

export default function App() {
  // const [state, dispatch] = useReducer(reducer, {
  //   user: getUser(),
  //   showCart: false,
  //   showUserPanel: false
  // })
  const [user, setUser] = useState(getUser());
  const [showCart, setShowCart] = useState(false)
  const [showUserPanel, setShowUserPanel] = useState(false)
  const [cart, setCart] = useState(null)
  const navigate = useNavigate()
  let location = useLocation()

  // automatically log in as guest user
  useEffect(() => {
    if (!user) {
      createGuestUser()
    }
  }, [])

  // automatically retreive cart
  useEffect(() => {
    async function getCartItems() {
      const cart = await ordersAPI.getCart()
      setCart(cart)
    }
    getCartItems()
  }, [])

  async function createGuestUser() {
    const guestUserData = {
      // generate random email address
      email: Math.round(Math.random() * 100000000) + '@guest.com',
      // assign guest name 
      name: 'c186ec',
      // set guest password
      password: 'guestpass'
    }
    localStorage.setItem('guest', guestUserData.email)
    const guestUser = await signUp(guestUserData)
    // set user to newly created guest user
    setUser(guestUser)
  }


  function handleLogoClick() {
    if (showCart) toggleShowCart()
    if (showUserPanel) toggleShowUserPanel()
    navigate('/home')
  }

  function toggleShowCart() {
    setShowCart(!showCart)
    document.body.style.overflow = showCart ? 'unset' : 'hidden'
  }
  function toggleShowUserPanel() {
    setShowUserPanel(!showUserPanel)
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty)
    setCart(updatedCart)
  }

  return (
    <main className={styles.App}>
      <Logo className={styles.Logo} location={location} handleLogoClick={handleLogoClick} />
      <NavBar
        className={styles.NavBar}
        user={user}
        cart={cart}
        showCart={showCart}
        toggleShowCart={toggleShowCart}
        toggleShowUserPanel={toggleShowUserPanel}
        location={location} />
      <div>
        {showCart && createPortal(<Cart
          className={styles.Cart + ' cart'}
          cart={cart}
          toggleShowCart={toggleShowCart}
          handleChangeQty={handleChangeQty} />, document.body)}
      </div>
      <div>
        {showUserPanel && createPortal(<UserPanel
          className={styles.UserPanel + ' user-panel'}
          user={user}
          setUser={setUser}
          toggleShowUserPanel={toggleShowUserPanel}
          createGuestUser={createGuestUser} />, document.body)}
      </div>
      <Routes>
        {/* client-side route that renders the component instance if the path matches the url in the address bar */}
        <Route path="/home" element={<Home className={styles.Home} />} />
        <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout user={user} setUser={setUser} handleChangeQty={handleChangeQty} order={cart} setCart={setCart} location={location} />} />
        <Route path="/orders" element={<OrderHistory user={user} setUser={setUser} />} />
        <Route path="/wishlist" element={<Wishlist />} />
        {/* <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
        <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} /> */}
        {/* redirect to /home if path in address bar hasn't matched a <Route> above */}
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </main>
  )
}