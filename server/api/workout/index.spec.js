'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var workoutCtrlStub = {
  index: 'workoutCtrl.index',
  show: 'workoutCtrl.show',
  create: 'workoutCtrl.create',
  update: 'workoutCtrl.update',
  destroy: 'workoutCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var workoutIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './workout.controller': workoutCtrlStub
});

describe('Workout API Router:', function() {

  it('should return an express router instance', function() {
    workoutIndex.should.equal(routerStub);
  });

  describe('GET /api/workouts', function() {

    it('should route to workout.controller.index', function() {
      routerStub.get
        .withArgs('/', 'workoutCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/workouts/:id', function() {

    it('should route to workout.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'workoutCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/workouts', function() {

    it('should route to workout.controller.create', function() {
      routerStub.post
        .withArgs('/', 'workoutCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/workouts/:id', function() {

    it('should route to workout.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'workoutCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/workouts/:id', function() {

    it('should route to workout.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'workoutCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/workouts/:id', function() {

    it('should route to workout.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'workoutCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
