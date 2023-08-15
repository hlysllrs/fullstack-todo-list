const { model, Schema } = require('mongoose')
require('./category')


const itemSchema = new Schema({
  name: { type: String, required: true },
  emoji: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  price: { type: Number, required: true, default: 0 },
  productFeatures: String,
  dimensions: String,
  designer: String
}, {
  timestamps: true
})

module.exports = {
  itemSchema,
  Item: model('Item', itemSchema)
}
