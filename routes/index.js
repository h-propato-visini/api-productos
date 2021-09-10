const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController')
const ProductInstance = new ProductController()

/* GET home page. */
router.get('/product/:category', (req,res) => ProductInstance.getProductByCat(req,res));

module.exports = router;
