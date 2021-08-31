const products = require('../mock/products.json')

class UserController {
    getUser(req, res) {
        res.json({
            name:'Hernan',
            surname: 'Propato'
        })
    }

    getProduct(req, res) {
        return res.json({
            products: products
        }) 
    }

    getProductByCat(req, res) {
        let category = req.params.category
        let productByCat = []
        products.map( product => {
            if(product.category == category)
                productByCat.push(product)
            })
            return res.json({
                products : productByCat
        })
    }
}

module.exports = UserController
