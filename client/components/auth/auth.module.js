'use strict';

angular.module('fitTraqApp.auth', [
  'fitTraqApp.constants',
  'fitTraqApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
