import sendRequest from './send-request'

const BASE_URL = '/api/orders'

// retreive an unpaid order for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`)
}

// add an item to the cart
export function addItemToCart(itemId) {
  // just send itemId for the best security (no pricing)
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST')
}

// update the item's qty in the cart
// will add the item to the order if not currently in the cart
// sending info via the data payload instead of a long URL
export function setItemQtyInCart(itemId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
}

// updates the order's (cart's) isPaid property to true
export function checkout() {
  // changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

// return all paid orders for the logged in user
export function getOrderHistory() {
  return sendRequest(`${BASE_URL}/history`);
}