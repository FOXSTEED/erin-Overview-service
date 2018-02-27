/* eslint no-undef: "off" */
const request = require('supertest');
const server = require('../server/app.js');

server.listen(8000);

describe('Test API', () => {
  test('it should route /attractions/:id/overview', async () => {
    const res = await request(server).get('/attractions/0/overview');
    expect(res.statusCode).toBe(200);
  });

  test('it should return proper data', async () => {
    const res = await request(server).get('/attractions/0/overview');
    expect(JSON.parse(res.text)).toEqual(expect.objectContaining({
      description: expect.anything(),
      address: expect.anything(),
      ratingBreakdowns: expect.anything(),
      cityAttractions: expect.anything(),
      category: expect.anything(),
      website: expect.anything(),
      duration: expect.anything(),
    }));
  });
});
