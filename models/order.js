const { model, Schema, default: mongoose } = require('mongoose')
const { itemSchema } = require('./item')

const lineItemSchema = new Schema({
  qty: { type: Number, default: 1 },
  item: itemSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
})

lineItemSchema.virtual('extPrice').get(function () {
  return this.qty * this.item.price
})

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  lineItems: [lineItemSchema],
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
})

orderSchema.virtual('orderTotal').get(function () {
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0)
})

orderSchema.virtual('totalQty').get(function () {
  return this.lineItems.reduce((total, item) => total + item.qty, 0)
})

orderSchema.virtual('orderId').get(function () {
  return this._id.slice(-6).toUpperCase()
})

orderSchema.statics.getCart = function (userId) {
  return this.findOneAndUpdate(
    // query
    { user: userId, isPaid: false },
    // updated data
    { user: userId },
    // upsert creates the doc if it doesn't exist
    { upsert: true, new: true }
  )
}

orderSchema.methods.addItemToCart = async function (itemId) {
  const cart = this
  // check if item is already in cart
  const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId))
  if (lineItem) {
    // if yes, increment item quantity
    lineItem.qty += 1
  } else {
    // if no, add item to cart
    const item = await model('Item').findById(itemId)
    cart.lineItems.push({ item })
  }
  return cart.save()
}

orderSchema.methods.setItemQty = function (itemId, newQty) {
  const cart = this
  // check if item is already in cart
  const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId))
  if (lineItem && newQty <= 0) {
    // if yes and newQty is 0 or less, remove from cart
    lineItem.remove()
  } else if (lineItem) {
    // if no, update item quantity
    lineItem.qty = newQty
  }
  return cart.save()
}

module.exports = model('Order', orderSchema)