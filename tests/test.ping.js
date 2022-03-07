const supertest = require('supertest');
const should = require('should');

const server = supertest.agent('http://localhost:3000');
server.timeout(1500);

describe('server - API', () => {
    it('should return home', (done) => {
        server
            .get('/api/ping')
            .expect(200, done);
    });
});