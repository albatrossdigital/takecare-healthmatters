'use strict';

/* Controllers */

var justiceControllers = angular.module('justiceControllers', ['mm.foundation']);

justiceControllers.controller('HomeCtrl', ['$scope', '$http', '$location', '$rootScope',
  function($scope, $http, $location, $rootScope) {
    $http.get('json/counties.json').success(function(data) {
      $scope.data = data;
      console.log(data);
      //$scope.counties = 
    });

    $scope.selected = undefined;
    $scope.countySelected = function($event) {
      $location.path('/county/' + $scope.selected.replace(' ', '_'));
    }

    $rootScope.class = 'home';
  }
]);

justiceControllers.controller('CountyDetailCtrl', ['$scope', '$routeParams', 'County', '$rootScope',
  function($scope, $routeParams, County, $rootScope) {
    $scope.class = '';
    $scope.county = County.get({countyId: $routeParams.countyId}, function(county) {
      //$scope.mainImageUrl = phone.images[0];
      console.log(county);
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }

    $rootScope.class = 'county';
  }
]);

justiceControllers.controller('PageCtrl', ['$scope', '$http', '$location', '$rootScope',
  function($scope, $http, $location, $rootScope) {
    $rootScope.class = 'page';
  }
]);
