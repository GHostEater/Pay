/**
 * Created by GHostEater on 27-Aug-16.
 */
angular.module('b').filter('Spaceless',function() {
    return function(input) {
        if (input) {
            return input.replace(/\s+/g, '-');
        }
    }
});