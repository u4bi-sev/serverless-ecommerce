import Product from '../models/Product'

export default {
    get : async (product_id) => {

        return Product.get(product_id)

    },
    getAll : async () => {
    
        return Product.scan().exec()

    },
    getCategoryProducts : (category_id) => {

        return new Promise(resolve => {

            Product.scan('category_id')
                .eq(category_id)
                .exec((err, products) => resolve(err ? [] : products))
            
        })

    },
    create : (product_model) => {

        return new Promise(resolve => {

            const product = new Product(product_model)

            product.save(err => resolve({ failure : err, data : product_model }))

        })

    },
    remove : (product_id) => {

        return new Promise(resolve => {

            Product.delete({product_id}, err => resolve({ failure : err }))

        })

    }

}