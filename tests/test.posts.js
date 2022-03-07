const supertest = require('supertest');
const should = require('should');

const server = supertest.agent('https://api.hatchways.io/assessment/blog/posts');
server.timeout(1500);

describe('server - Posts', () => {
    it('should return tech posts', (done) => {
        server
            .get('?tag=tech')
            .expect(200, done);
    });
});