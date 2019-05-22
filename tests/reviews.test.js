import test from 'ava'
import request from 'supertest'

import app from '../src/server'

test('GET /reviews', async t => {

    const res = await request(app)
                        .get('/reviews')

    t.is(res.status, 200)
    t.is(res.body.message, 'reviews')

})