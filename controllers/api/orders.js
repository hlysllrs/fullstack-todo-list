const Order = require('../../models/order')

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  history
}

// cart is the unpaid order for a user
async function cart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id)
    res.status(200).json(cart)
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
}

// add an item to the cart
async function addToCart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id)
    await cart.addItemToCart(req.params.id)
    res.status(200).json(cart)
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
}

// update an item's qty in the cart
async function setItemQtyInCart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id)
    await cart.setItemQty(req.body.itemId, req.body.newQty)
    res.status(200).json(cart)
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
}

// update cart's isPaid property to true
async function checkout(req, res) {
  try {
    const cart = await Order.getCart(req.user._id)
    cart.isPaid = true
    await cart.save()
    res.status(200).json(cart)
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
}

// return the logged in user's paid order history
async function history(req, res) {
  // sort the most recent orders first
  try {
    const orders = await Order
      .find({ user: req.user._id, isPaid: true })
      .sort('-updatedAt').exec()
    res.status(200).json(orders)
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
}