const supertest = require('supertest');
const should = require('should');
const assert = require('assert');

const server = supertest.agent('http://localhost:3000');
server.timeout(1500);

describe('server - Posts', () => {
    it('should return tech posts', (done) => {
        server
            .get('/api/posts?tags=tech')
            .end((err, res) => {
                if(err) return done(err);
                res.status.should.equal(200);
                done();
            })
    });
    it('GET /api/posts?tags=culture,history&sortBy=likes', (done) => {
        server
            .get('/api/posts?tags=culture,history&sortBy=likes')
            .end((err, res) => {
                if(err) return done(err);
                res.status.should.equal(200);
                done();
            });
    });
});