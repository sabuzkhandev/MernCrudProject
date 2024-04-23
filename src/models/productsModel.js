const mongoose = require('mongoose')
const DataSchema = mongoose.Schema(
  {
    food_name: { type: String },
    food_code: { type: String },
    food_image: { type: String },
    food_category: { type: String },
    qty: { type: String },
    food_price: { type: String },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
)

const ProductsModel = mongoose.model('products', DataSchema)
module.exports = ProductsModel
