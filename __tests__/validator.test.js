'use strict'

const {server} = require('../src/server')
const supertest = require('supertest')
const mockReq = supertest(server)

describe('VALIDATOR TEST', ()=>{
    it('500 if no name in the query string', ()=>{
        return mockReq.get('/person').then(data=>{
            expect(data.status).toEqual(500)
            // expect(data.query).toBeUnDefined()
        })
    })
})