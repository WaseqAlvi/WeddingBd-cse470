import express from 'express'
// import asyncHandler from 'express-async-handler'
const router = express.Router()
// import Product from '../models/productModel.js'
import products from '../data/products.js'
import { getProducts,getProductById } from '../controllers/productControllers.js'


// @description Fetch all products
// @route GET / api/products
// @access Public
router.route('/').get(getProducts)
router.route('/:id').get(getProductById)
 
// @description Fetch singleproducts
// @route GET / api/products/:id
// @access Public
// router.get('/:id',asyncHandler(async (req,res) =>{
//  const product = await Product.findById(req.params.id)

//  if(product){
//   res.json(product)
//  } else { 
//   res.status(404)
//   throw new Error('Product not found')
//  }
 
// }  ))

export default router