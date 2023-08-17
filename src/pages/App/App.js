import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.scss';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import routes from '../../router/routes'
import Cart from '../../components/Cart/Cart';
import { getToken, getUser, signUp } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [showCart, setShowCart] = useState(false)
  const [showUserPanel, setShowUserPanel] = useState(false)

  // automatically log in as guest user
  useEffect(() => {
    if (!user) {
      const guestUserData = {
        // generate random email address
        email: Math.round(Math.random() * 100000) + '@guest.com',
        // assign guest name 
        name: 'c186ec',
        // set guest password
        password: 'guestpass'
      }
      // set user to newly created guest user
      setUser(async () => await signUp(guestUserData))
    }
  }, [])

  return (
    <>
      <main className={styles.App}>
        {/* {user ? */}
        <>
          <NavBar routes={routes} showCart={showCart} setShowCart={setShowCart} showUserPanel={showUserPanel} setShowUserPanel={setShowUserPanel} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
            <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
        </>
        {/* :
          <AuthPage user={user} setUser={setUser} />
        } */}
      </main>
    </>
  );
}