var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController')
const UserInstance = new UserController()

/* GET home page. */
router.get('/', (req, res) => UserInstance.getUser(req, res));
router.get('/product', (req,res) => UserInstance.getProduct(req,res));
router.get('/product/:category', (req,res) => UserInstance.getProductByCat(req,res));

module.exports = router;
