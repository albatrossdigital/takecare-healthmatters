'use strict';

/* App Module */

var justiceApp = angular.module('justiceApp', [
  'ngRoute',
  'justiceControllers',
  'justiceFilters',
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
      }).
      otherwise({
        redirectTo: '/counties'
      });
  }]);
