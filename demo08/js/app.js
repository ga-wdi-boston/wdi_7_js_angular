// initialize the app
angular.module('Demo', []);

// custom filter
angular.module('Demo').filter('capitalize', function() {

	// helpers

    return function(param) {
        if (param) {
            return param[0].toUpperCase() + param.slice(1);
        }
    };
});