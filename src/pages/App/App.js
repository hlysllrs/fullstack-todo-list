import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.scss';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import routes from '../../router/routes'
import Cart from '../../components/Cart/Cart';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [showCart, setShowCart] = useState(false)
  const [showUserPanel, setShowUserPanel] = useState(false)
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
      <Cart />
    </>
  );
}