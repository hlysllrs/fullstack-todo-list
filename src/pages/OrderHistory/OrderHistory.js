export default function OrderHistory(props) {
  return (
    <div className="OrderHistory">
      <center>
        <h1>Order History</h1>

      </center>
    </div>
  )
}


// import styles from './OrderHistoryPage.module.scss'
// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import * as ordersAPI from '../../utilities/orders-api'
// import Logo from '../../components/Logo/Logo'
// import OrderList from '../../components/OrderList/OrderList'
// import OrderDetail from '../../components/OrderDetail/OrderDetail'
// import UserLogOut from '../../components/UserLogOut/UserLogOut'

// export default function OrderHistoryPage({ user, setUser }) {
//   /* ----- State ----- */
//   const [orders, setOrders] = useState([])
//   const [activeOrder, setActiveOrder] = useState(null)

//   /* ----- Effects ----- */
//   useEffect(function () {
//     // load previous paid orders
//     async function fetchOrderHistory() {
//       const orders = await ordersAPI.getOrderHistory()
//       setOrders(orders)
//       // if no orders, acriveORder will be set to null
//       setActiveOrder(orders[0] || null)
//     }
//     fetchOrderHistory()
//   }, [])

//   /* ----- Event Handlers ----- */
//   function handleSelectOrder(order) {
//     setActiveOrder(order)
//   }

//   /* ----- Rendered UI ----- */
//   return (
//     <main className={styles.OrderHistoryPage}>
//       <aside className={styles.aside}>
//         <Logo />
//         <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
//         <UserLogOut user={user} setUser={setUser} />
//       </aside>
//       <OrderList
//         orders={orders}
//         activeOrder={activeOrder}
//         handleSelectOrder={handleSelectOrder}
//       />
//       <OrderDetail
//         order={activeOrder}
//       />
//     </main>
//   )
// }