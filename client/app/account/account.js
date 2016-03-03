'use strict';

angular.module('fitTraqApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('logout', {
        url: '/logout?referrer',
        referrer: 'main',
        template: '',
        controller: function($state, Auth) {
          var referrer = $state.params.referrer ||
                          $state.current.referrer ||
                          'main';
          Auth.logout();
          $state.go(referrer);
        }
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupController',
        controllerAs: 'vm'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'vm',
        authenticate: true
      })
      .state('calendar', {
        url: '/calendar',
        templateUrl: 'app/account/event/event.html',
        controller: 'EventController',
        controllerAs: 'vm'
      })
      .state('events', {
        url: '/events',
        templateUrl: 'app/account/altEvent/altEvent.html',
        controller: 'EventController',
        controllerAs: 'vm'
      })
      .state('eventShow', {
        url: '/events/:id',
        templateUrl: 'app/account/altEvent/altEventShow.html',
        controller: 'EventController',
        controllerAs: 'vm'
      })
  })
  .run(function($rootScope) {
    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, current) {
      if (next.name === 'logout' && current && current.name && !current.authenticate) {
        next.referrer = current.name;
      }
    });
  });
