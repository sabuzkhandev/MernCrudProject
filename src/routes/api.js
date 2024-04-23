const express = require('express')
const ProductsController = require('../controllers/productsController')

const router = express.Router()

// create product routes
router.post('/create', ProductsController.Create)

//read product routes
router.get('/read', ProductsController.Read)

//readById product routes
router.get('/readById/:id', ProductsController.ReadById)

// delete product routes
router.get('/delete/:id', ProductsController.Delete)

// update product routes
router.post('/update/:id', ProductsController.Update)

module.exports = router
