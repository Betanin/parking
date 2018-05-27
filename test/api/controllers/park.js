var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function () {

    describe('park', function () {

        describe('GET /park/lotation', function () {

            it('should return a 0 lotation', function (done) {

                request(server)
                    .get('/park/lotation')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function (err, res) {
                        should.not.exist(err);

                        JSON.parse(res.body).should.be.eql({ vehicles: 0 });

                        done();
                    });
            });

        });

        describe('GET /park/checkin', function () {

            it('should persists the checkin and return a 1 lotation', function (done) {

                request(server)
                    .get('/park/checkin')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function (err, res) {
                        should.not.exist(err);

                        JSON.parse(res.body).should.be.eql({ vehicles: 1 });

                        done();
                    });
            });

        });

        describe('GET /park/checkin', function () {

            it('should persists the checkin and return a 2 lotation', function (done) {

                request(server)
                    .get('/park/checkin')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function (err, res) {
                        should.not.exist(err);

                        JSON.parse(res.body).should.be.eql({ vehicles: 2 });

                        done();
                    });
            });

        });

        describe('GET /park/checkout', function () {

            it('should persists the checkout and return a 1 lotation', function (done) {

                request(server)
                    .get('/park/checkout')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function (err, res) {
                        should.not.exist(err);

                        JSON.parse(res.body).should.be.eql({ vehicles: 1 });

                        done();
                    });
            });

        });

    });

    describe('GET /park/checkout', function () {

        it('should persists the checkout and return a 0 lotation', function (done) {

            request(server)
                .get('/park/checkout')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function (err, res) {
                    should.not.exist(err);

                    JSON.parse(res.body).should.be.eql({ vehicles: 0 });

                    done();
                });
        });

    });

    describe('GET /park/checkout', function () {

        it('should try the checkout and return an error', function (done) {

            request(server)
                .get('/park/checkout')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function (err, res) {
                    should.exist(err);
                    done();
                });
        });

    });

});
