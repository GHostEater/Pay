/**
 * Created by GHostEater on 27-Aug-16.
 */
angular.module('b')
    .directive("activeAppend", function() {
        return {
            restrict: "A",
            link: function(scope,elem) {
                scope.$watch('vm.posts',function(newVal){
                    if(newVal){
                        $(elem).find(':first-child').addClass('active');
                    }
                });
            }
        }
    });