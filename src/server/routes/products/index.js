import { Router } from 'express'
import product from '../../services/product'

const router = Router()

router
    .get('/', (req, res) => {

        product.getAll().then(e => res.json(e))

    })
    .get('/:product_id', (req, res) => {

        product.get(req.params.product_id).then(res.json)

    })
    .post('/', (req, res) => {

        product.create({
            name : req.body.name,
            desc : req.body.desc,
            price : req.body.price,
            category_id : req.body.category_id,
            images : []
        }).then(res.json)

    })
    .delete('/:product_id', (req, res) => {

        product.remove(req.params.product_id).then(res.json)

    })

export default router