import { Router } from 'express'

const router = Router()

router
    .get('/', (req, res) => res.json({ id : req.session.user_id }))
    .post('/login', (req, res) => {

        const test_user = { id : 'u4bi', pw : '1234' }

        if (req.body.user_id === test_user.id && req.body.pw === test_user.pw) {

            req.session.user_id = req.body.user_id

            res.json({ id : req.session.user_id })

        } else {

            res.json({ failure : true })

        }

    })

export default router