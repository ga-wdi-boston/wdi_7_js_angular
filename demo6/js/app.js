// initialize the app
angular.module('Demo', []);

// main controller
angular.module('Demo').controller('MainCtrl', function($scope, $http) {
    'use strict';

    $http.get('http://localhost:3000/users').success(function(response) {
        $scope.users = response;
    });

    $scope.createUser = function(user) {
    	var params = {
    		user: user
    	};

    	$http.post('http://localhost:3000/users', params).success(function(response) {
            $scope.users.push(response);

            $scope.user = {};
        });
    };

    $scope.deleteUser = function(user) {
        $http.delete('http://localhost:3000/users/' + user.id).success(function(response) {
            // remove from users array by id
            for (var i = 0; i < $scope.users.length; i++){
                if ($scope.users[i].id == user.id) {
                    $scope.users.splice(i, 1);

                    break;
                }
            }
        });
    };
});