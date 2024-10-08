const request = require('supertest')
const { app, clientPromise } = require('../app');
const appInstance = app();
const mockToken = require('./mocktoken')
// noinspection JSUnresolvedVariable
const Agency = require('../models').Agency
const {common} = require('../config/config.js')

const { userAcceptedCASData } = require('./test.data')
let token = null

/** @namespace res.statusCode */

describe('/api/agencies', () => {
  let agency = 'abc'
  let acronym = 'def'

  beforeAll( async () => {
    // tests can give false failure if the time cuttoff removes all the useful test data
    process.env.minPredictionCutoffDate = '1990-01-01';
    token = await mockToken(userAcceptedCASData, common['jwtSecret'])
  })

  afterAll(() => {
    return Agency.destroy({ where: { agency: agency } })
  })

  test('/api/agencies (get)', async () => {
    return request(appInstance)
      .get('/api/agencies')
      .set('Authorization', `Bearer ${token}`)
      .then((res) => {
        // noinspection JSUnresolvedVariable
        expect(res.statusCode).toBe(200)
        expect(res.body.length).toBeGreaterThan(2)
        expect(res.body).toContainEqual({ 'Acronym': 'GSA', 'Agency': 'General Services Administration' })
      })
  })

  test('/api/agencies (put)', async () => {
    return request(appInstance)
      .put('/api/agencies')
      .set('Authorization', `Bearer ${token}`)
      .send({ agency: agency, acronym: acronym })
      .then((res) => {
        // noinspection JSUnresolvedVariable
        expect(res.statusCode).toBe(200)
        return Agency.findOne({ where: { acronym: 'def' } })
          .then((a) => {
            return expect(a.agency).toBe(agency)
          })
      })
  })

  test('/api/AgencyList', async () => {
    return request(appInstance)
      .get('/api/AgencyList')
      .set('Authorization', `Bearer ${token}`)
      .send({ agency: agency, acronym: acronym })
      .then((res) => {
        // noinspection JSUnresolvedVariable
        expect(res.statusCode).toBe(200)
        expect(res.body).toBeDefined()
        expect(res.body.length).toBeGreaterThan(1)
        return expect(typeof (res.body[0])).toBe('string')
      })
  }, 10000)
})
