const { model, Schema } = require('mongoose')

const wishlistSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
})

module.exports = model('Wishlist', wishlistSchema)