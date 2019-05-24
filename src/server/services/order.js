import Order from '../models/Order'

export default {
    get : async (order_id) => {

        return Order.get(order_id)

    },
    getUserOrders : (user_id) => {

        return new Promise(resolve => {

            Product.scan('user_id')
                .eq(user_id)
                .exec((err, orders) => resolve(err ? [] : orders))
            
        })

    },
    create : (order_model) => {

        return new Promise(resolve => {

            const order = new Order(order_model)

            order.save(err => resolve({ failure : err, data : order_model }))

        })

    },
    remove : (order_id) => {

        return new Promise(resolve => {

            Order.delete({order_id}, err => resolve({ failure : err }))

        })

    }

}