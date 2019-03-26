import test from 'ava'
import request from 'supertest'

import app from '../src/server'

test('GET /', async t => {

    const res = await request(app)
                        .get('/')

    t.is(res.status, 200)
    t.is(res.body.message, 'test')

})