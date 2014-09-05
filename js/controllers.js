'use strict';

/* Controllers */

var justiceControllers = angular.module('justiceControllers', ['mm.foundation']);

justiceControllers.controller('HomeCtrl', ['$scope', '$http', '$location', '$timeout','$rootScope',
  function($scope, $http, $location, $timeout, $rootScope) {
    $http.get('json/counties.json').success(function(data) {
      $scope.data = data;
    });

    $scope.countySelected = function($event) {
      var val = $('#county').select2('val');
      if (val != undefined) {
        $location.path('/county/' + val.replace(' ', '_'));
      }
    }

    // @todo: make work
    $timeout(function (){
      angular.element('#typeahead').trigger('focus');
    }, 1000);

    $rootScope.class = 'home';
  }
]);

justiceControllers.controller('CountyDetailCtrl', ['$scope', '$routeParams', 'County', '$rootScope',
  function($scope, $routeParams, County, $rootScope) {
    $scope.class = '';
    $scope.county = County.get({countyId: $routeParams.countyId}, function(county) {});

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }

    $rootScope.class = 'county';
  }
]);

justiceControllers.controller('PageCtrl', ['$scope', '$routeParams', '$rootScope', '$window', '$timeout',
  function($scope, $routeParams, $rootScope, $window, $timeout) {
    $scope.section = $routeParams.sectionId ? $routeParams.sectionId : 'bho';
    $rootScope.class = 'page';

    if ($routeParams.sectionId) {
      $timeout(function (){
        $('html, body').animate({
            scrollTop: 390,
            scrollLeft: 0
        }, 1000);
      }, 1000);
      
    }
    
  }
]);
