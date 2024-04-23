const ProductsModel = require('../models/productsModel')

;(exports.Create = async (req, res) => {
  let reqBody = req.body

  // console.log(reqBody)
  try {
    await ProductsModel.create(reqBody)
    res
      .status(200)
      .json({ status: 'success', message: 'Product Created successful' })
  } catch (err) {
    res.status(200).json({ message: err.message })
  }
}),
  (exports.Read = async (req, res) => {
    try {
      let rows = await ProductsModel.find()
      res
        .status(200)
        .json({ status: 'success', message: 'Data get successful', rows: rows })
    } catch (err) {
      res.status(200).json({ message: err.message })
    }
  }),
  (exports.ReadById = async (req, res) => {
    try {
      let { id } = req.params
      let rows = await ProductsModel.find({ _id: id })
      res
        .status(200)
        .json({ status: 'success', message: 'Data get successful', rows: rows })
    } catch (err) {
      res.status(200).json({ message: err.message })
    }
  }),
  (exports.Delete = async (req, res) => {
    let id = req.params.id
    let query = { _id: id }
    try {
      await ProductsModel.deleteOne(query)
      res
        .status(200)
        .json({ status: 'success', message: 'Data deleted successful' })
    } catch (err) {
      res.status(200).json({ message: err.message })
    }
  }),
  (exports.Update = async (req, res) => {
    let id = req.params.id
    let reqBody = req.body
    let query = { _id: id }
    try {
      await ProductsModel.updateOne(query, reqBody)
      res.status(200).json({
        status: 'success',
        message: 'Data updated successful',
      })
    } catch (err) {
      res.status(200).json({ message: err.message })
    }
  })
