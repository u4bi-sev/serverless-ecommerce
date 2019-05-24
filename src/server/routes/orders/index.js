import { Router } from 'express'
import order from '../../services/order'

const router = Router()

router
    .get('/user/:user_id', (req, res) => order.get(req.params.user_id).then(e => res.json(e)))
    .get('/:order_id', (req, res) => order.getUserOrders(req.params.order_id).then(e => res.json(e)))
    .post('/', (req, res) => {

        order.create({
            user_id : req.body.user_id,
            status : 'A',
            product_ids : [],
            total_price : req.body.total_price,
            shipment : ''
        }).then(e => res.json(e))

    })
    .delete('/:order_id', (req, res) => {

        order.remove(req.params.order_id).then(e => res.json(e))

    })

export default router