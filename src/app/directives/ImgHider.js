/**
 * Created by GHostEater on 27-Aug-16.
 */
angular.module('b')
    .directive("imgHider", function() {
        return {
            restrict: "A",
            link: function(scope,elem) {
                scope.$watch('vm.posts',function(newVal){
                    if(newVal){
                        $(elem).find('img').css('display','none');
                        $(elem).find('video').css('display','none');
                        $(elem).find('audio').css('display','none');
                    }
                });
            }
        }
    });