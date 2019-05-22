import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.json({ message : 'carts' }))

export default router