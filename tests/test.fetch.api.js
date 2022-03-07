const supertest = require('supertest');
const should = require('should');

const urlFromDataSource = supertest.agent('https://api.hatchways.io/assessment/blog/posts');
urlFromDataSource.timeout(1500);

describe('server - Fetch API', () => {

    it('should return error from url', (done) => {
        urlFromDataSource
            .get('/')
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                res.text.should.be.equal('{"error":"The tag parameter is required"}\n');
                done();
            });
    });
});
