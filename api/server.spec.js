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

describe('GET /videogames endpoint testing', () => {
    it('should return status code 200', async () => {
        const res = await request(server).get('/videogames')

        expect(res.status).toBe(200)
    })

    it('this endpoint "/" should return JSON', async () => {
        const res = await request(server).get('/videogames')

        expect(res.type).toBe('application/json')
    })
})

describe('POST /videogames endpoint testing', () => {
    it('should return status code 201', async () => {
        const bodyObj = { games: 'persona10' }
        const res = await request(server).post('/videogames').send(bodyObj)

        expect(res.status).toBe(201)
    })

    it('this endpoint "/videogames" should return object in req.body', async () => {
        const bodyObj = { games: 'persona8' }
        const res = await request(server).post('/videogames').send(bodyObj)

        expect(res.type).toBe('application/json')
    })
})

describe('DELETE /videogames/:id endpoint testing', () => {
    it('should return the item number deleted', async () => {
        const res = await request(server).delete('/videogames/1')

        expect(res.body).toEqual(1)
    })

    it('should return status code 200', async () => {
        const res = await request(server).delete('/videogames/1')

        expect(res.status).toBe(200)
    })
})