const supertest = require('supertest');

const server = supertest.agent('http://localhost:3000');
server.timeout(1500);

describe('server - API', () => {
    it('should return home', (done) => {
        server
            .get('/')
            .expect(200, done);
    });
});
