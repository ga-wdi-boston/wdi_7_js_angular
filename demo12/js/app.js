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

angular.module('Demo').directive('gaHover', function() {
    return {
        restrict: 'A',

        link: function($scope, element) {
            element.bind('mouseover', function() {
                element.addClass('hover');
            });
            
            element.bind('mouseout', function() {
                element.removeClass('hover');
            });
        }
    };
});