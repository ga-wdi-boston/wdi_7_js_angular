// initialize the app
angular.module('Demo', []);

angular.module('Demo').directive('gaClickable', function() {
    return {
        restrict: 'A',

        link: function($scope, element) {
            element.bind('click', function() {
                alert('Hello');
            });
        }
    };
});