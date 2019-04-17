const request = require('supertest')

const server = require('./server')

describe('GET endpoint testing', () => {
    it('this endpoint "/" should return status code 200', async () => {
        const res = await request(server).get('/')

        expect(res.status).toBe(200)
    })

    it('this endpoint "/" should return JSON', async () => {
        const res = await request(server).get('/')

        expect(res.type).toBe('application/json')
    })

    it('this endpoint "/" should return { api: "All Good"}', async () => {
        const res = await request(server).get('/')

        expect(res.body).toEqual({ api: 'All Good' })
    })
})