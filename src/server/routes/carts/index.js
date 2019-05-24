import { Router } from 'express'
import cart from '../../services/cart'

const router = Router()

router
    .get('/products/:user_id', (req, res) => {

        cart.getUserProducts(req.params.user_id).then(e => res.json(e))

    })
    .post('/', (req, res) => {

        cart.create({
            user_id : req.body.user_id,
            product_ids : []
        }).then(e => res.json(e))

    })
    .delete('/:user_id', (req, res) => {

        cart.remove(req.params.user_id).then(e => res.json(e))

    })

export default router