import test from 'ava'
import request from 'supertest'

import app from '../src/server'

test('GET /auths', async t => {

    const res = await request(app)
                        .get('/auths')

    t.is(res.status, 200)
    t.is(res.body.message, 'auths')

})