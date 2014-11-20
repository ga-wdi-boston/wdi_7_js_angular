angular.module('Demo', []);

// main controller
angular.module('Demo').controller('MainCtrl', function($scope) {
    'use strict';

    $scope.users = [{
        first_name: 'dan',
        last_name: 'johnson'
    }, {
        first_name: 'ella',
        last_name: 'johnson'
    }, {
        first_name: 'ava',
        last_name: 'johnson'
    }];

    $scope.createUser = function(user) {
        $scope.users.push(user);

        $scope.user = {};
    };
});