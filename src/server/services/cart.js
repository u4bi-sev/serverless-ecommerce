import Cart from '../models/Cart'
import Product from '../models/Product'

export default {
    getUserProducts : (user_id) => {

        return new Promise(resolve => {

            Cart.scan('user_id')
                .eq(user_id)
                .exec((err, carts) => {

                    !carts.length || err ? resolve([]) 
                    : 
                    Product.scan('product_id')
                        .in(carts[0].product_ids)
                        .exec((err, products) => resolve(err ? [] : products))

                })

        })

    },
    create : (cart_model) => {

        return new Promise(resolve => {

            const cart = new Cart(cart_model)

            cart.save(err => resolve({ failure : err, data : cart_model }))

        })

    },
    remove : (user_id) => {

        return new Promise(resolve => {

            Cart.delete({user_id}, err => resolve({ failure : err }))

        })

    }

}