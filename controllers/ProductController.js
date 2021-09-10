const products = require('../mock/products.json')

class ProductController {
    getProductByCat(req, res) {
        const category = req.params.category
        const productByCat = []

        products.map((product, key) => {
            if(product.category == category)
                productByCat.push(product)
        })

        return res.json({
            products : productByCat
        })
    }
}

module.exports = ProductController
