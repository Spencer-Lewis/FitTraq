'use strict';

angular.module('fitTraqApp', [
  'fitTraqApp.auth',
  'fitTraqApp.admin',
  'fitTraqApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });

var events = [];
