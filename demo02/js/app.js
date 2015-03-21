(function() {
    'use strict';

    // initialize the app
    angular
        .module('Demo', []);

    // main controller
    angular
        .module('Demo')
        .controller('MainCtrl', MainCtrl);

    function MainCtrl() {
        var vm = this;

        // basic scope properties
        vm.greeting = 'Hello';

        vm.person = {
            firstName: 'Dan',
            lastName: 'Johnson'
        };

        vm.redFruits = ['apple', 'cherry', 'strawberry'];
        vm.greenFruits = ['kiwi', 'avocado', 'honeydew'];
    }

})();