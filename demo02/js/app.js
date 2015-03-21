// initialize the app
angular.module('Demo', []);

// main controller
angular.module('Demo').controller('MainCtrl', function($scope) {
    'use strict';

    // basic scope properties
    $scope.greeting = 'Hello';

    $scope.person = {
        firstName: 'Dan',
        lastName: 'Johnson'
    };

    // update scope properties using $watch
    var redFruits = ['apple', 'cherry', 'strawberry'];
    var greenFruits = ['kiwi', 'avocado', 'honeydew'];

    $scope.favFruits = [];

    $scope.$watch('favColor', function(newValue, oldValue) {
    	switch (newValue) {
    		case 'red':
    			$scope.favFruits = redFruits;
    			break;

    		case 'green':
    			$scope.favFruits = greenFruits;
    			break;

    		default:
    			$scope.favFruits = [];
    			break;
    	}
    });
});