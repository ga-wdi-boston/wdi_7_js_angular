describe('Demo', function() {
    'use strict';

    // mock the demo module
    beforeEach(angular.mock.module('Demo'));

    // test capitalize filter
    it('capitalize filter should calitalize first letter in a string', function() {
        inject(function(capitalizeFilter) {
            expect(capitalizeFilter('test')).not.toBe('test');
            expect(capitalizeFilter('test')).toBe('Test');
        });
    });
});
