import { Router } from 'express'
import review from '../../services/review'

const router = Router()

router
    .get('/product/:product_id', (req, res) => {

        review.getProductReviews(req.params.product_id).then(e => res.json(e))

    })
    .post('/', (req, res) => {

        review.create({
            user_id : req.body.user_id,
            product_id : req.body.product_id,
            title : req.body.title,
            content : req.body.content
        }).then(e => res.json(e))

    })
    .delete('/:review_id', (req, res) => {

        review.remove(req.params.review_id).then(e => res.json(e))

    })

export default router