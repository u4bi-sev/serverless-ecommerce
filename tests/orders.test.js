import test from 'ava'
import request from 'supertest'

import app from '../src/server'

test('GET /orders', async t => {

    const res = await request(app)
                        .get('/orders')

    t.is(res.status, 200)
    t.is(res.body.message, 'orders')

})