'use strict';

/* Directives */
justiceApp.directive('sidebar', function(){
    return {
        restrict: 'E',
        templateUrl: 'partials/sidebar.html',
    };
});
justiceApp.directive('shortUrl', function(){
    return {
        restrict: 'A',
        replace: true,
        scope: { field:'=field' },
        //controller: 'ShortenCtrl',
        template: '<a href="{{url}}" title="{{url}}" target="_blank">{{shortUrl}}</a>',
        link: function(scope, element, attrs, ctrl) {
            var updateLink = function(url) {
                if (url != undefined) {
                    scope.url = url;
                    scope.shortUrl = url.length > 50 ? url.substring(0,50) + '...' : url;
                }
            }

            scope.$watch('field', function(field) {
                updateLink(field);
            });
        }
    }
});


/*
$("#FN, #LN").each (function () {
  if ($(this).text().length > 50)
    $(this).text($(this).text().substring(0,50) + '...'));
});
*/