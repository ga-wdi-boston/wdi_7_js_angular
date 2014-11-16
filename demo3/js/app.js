// initialize the app
angular.module('Demo', []);

// main controller
angular.module('Demo').controller('MainCtrl', function($scope) {
    'use strict';

    $scope.users = [{
        firstName: 'dan',
        lastName: 'johnson'
    }, {
        firstName: 'ella',
        lastName: 'johnson'
    }, {
        firstName: 'ava',
        lastName: 'johnson'
    }];
});