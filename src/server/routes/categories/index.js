import { Router } from 'express'
import category from '../../services/category'

const router = Router()

router
    .get('/', (req, res) => {

        category.getAll().then(e => res.json(e))

    })
    .post('/', (req, res) => {

        category.create({
            category_id : req.body.category_id,
            name : req.body.name,
        }).then(e => res.json(e))

    })
    .delete('/:category_id', (req, res) => {

        category.remove(req.params.category_id).then(e => res.json(e))

    })

export default router