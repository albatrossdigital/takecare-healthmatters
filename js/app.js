'use strict';

/* App Module */

var justiceApp = angular.module('justiceApp', [
  'ngRoute',
  'justiceControllers',
  'justiceServices'
]);

justiceApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/counties', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/county/:countyId', {
        templateUrl: 'partials/county-detail.html',
        controller: 'CountyDetailCtrl'
      }).
      when('/glossary', {
        templateUrl: 'partials/glossary.html',
        controller: 'PageCtrl'
      }).
      otherwise({
        redirectTo: '/counties'
      });
  }]);
