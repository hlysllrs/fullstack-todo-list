const { model, Schema } = require('mongoose')
require('./category')


const itemSchema = new Schema({
  name: { type: String, required: true },
  imageURL: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  price: { type: Number, required: true, default: 0 },
  featured: Boolean,
}, {
  timestamps: true
})

module.exports = {
  itemSchema,
  Item: model('Item', itemSchema)
}
