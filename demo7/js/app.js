// initialize the app
angular.module('Demo', [
    'ngRoute'
]);

angular.module('Demo').config(function($routeProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html'
        })
        .when('/about', {
            templateUrl: 'templates/about.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angular.module('Demo').controller('NavbarCtrl', function($scope, $location) {
    'use strict';

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});
