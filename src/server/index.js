import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import routes from './routes'

const server = express()

server
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended : true }))
    .use(session({ secret : '1' }))
    .use('/products', routes.products)
    .use('/reviews', routes.reviews)
    .use('/orders', routes.orders)
    .use('/categories', routes.categories)
    .use('/carts', routes.carts)
    .use('/auths', routes.auths)
    .get('/', (req, res) => res.json({ message : 'test' }))

export default server