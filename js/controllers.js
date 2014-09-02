'use strict';

/* Controllers */

var justiceControllers = angular.module('justiceControllers', ['mm.foundation']);

justiceControllers.controller('HomeCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
    $scope.class = 'front';
    $http.get('json/counties.json').success(function(data) {
      $scope.data = data;
      console.log(data);
      //$scope.counties = 
    });

    $scope.selected = undefined;
    $scope.countySelected = function($event) {
      $location.path('/county/' + $scope.selected.replace(' ', '_'));
    }
  }]);

justiceControllers.controller('CountyDetailCtrl', ['$scope', '$routeParams', 'County',
  function($scope, $routeParams, County) {
    $scope.class = '';
    $scope.county = County.get({countyId: $routeParams.countyId}, function(county) {
      //$scope.mainImageUrl = phone.images[0];
      console.log(county);
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
