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
});