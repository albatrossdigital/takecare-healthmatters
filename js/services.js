'use strict';

/* Services */

var justiceServices = angular.module('justiceServices', ['ngResource']);

justiceServices.factory('County', ['$resource',
  function($resource){
    return $resource('json/:countyId.json', {}, {
      query: {method:'GET', params:{countyId:'counties'}, isArray:true}
    });
  }]);
