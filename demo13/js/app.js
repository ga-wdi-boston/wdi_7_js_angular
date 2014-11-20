angular.module('Demo', []);

angular.module('Demo').controller('DemoCtrl', function($scope) {
    $scope.alertFeedback = function(feedback) {
        alert('Name: ' + feedback.name + '\nComments: ' + feedback.comments);
    };

    $scope.foo = function(bar) {
        alert(bar);
    };
});

angular.module('Demo').directive('gaFeedback', function() {
    return {
        restrict: 'E',
        scope: {
            placeholder: '@', // one way property, outside in
            submitAction: '&', // one way behavior, inside out, uses parent scope to execute
            whatWhat: '&'
        },
        templateUrl: 'templates/feedback.html'
    };
});