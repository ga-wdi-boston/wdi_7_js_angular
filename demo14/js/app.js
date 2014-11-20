angular.module('Demo', []);

angular.module('Demo').directive('gaModal', function() {
    return {
        restrict: 'E',

        transclude: true,

        templateUrl: 'templates/modal.html',

        scope: {
            title: '@'
        }
    };
});
