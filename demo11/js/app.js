angular.module('Demo', []);

angular.module('Demo').directive('gaLorem', function() {
	return {
        restrict: 'EA',

        templateUrl: 'templates/lorem.html',

        scope: {
            repetitions: '@' // one way, outside in
        }
    };
});

angular.module('Demo').filter('range', function() {
	return function(param) {
		if (param) {
			// fancy way to fill an array with numbers 0..n
			return Array.apply(null, {length: param}).map(Number.call, Number);
        }
    };
});