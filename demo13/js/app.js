angular.module('Demo', []);

angular.module('Demo').controller('DemoCtrl', function($scope) {
    $scope.alertFeedback = function(feedback) {
        alert('Name: ' + feedback.name + '\nComments: ' + feedback.comments);
    };
});

angular.module('Demo').directive('gaFeedback', function() {
    return {
        restrict: 'E',
        scope: {
            placeholder: '@', // one way expression, outside in
            submitAction: '&' // one way behavior, inside out, uses parent scope to execute
        },
        templateUrl: 'templates/feedback.html'
    };
});