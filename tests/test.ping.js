const supertest = require('supertest');
const should = require('should');

const server = supertest.agent('http://localhost:3000');
server.timeout(1500);

describe('server - Ping', () => {
    it('should return data', (done) => {
        server
            .get('/api/ping')
            .expect(200, done);
    });
});