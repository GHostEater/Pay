/**
 * Created by GHostEater on 01-Sep-16.
 */
angular.module('b')
    .directive("autoImgResponsive", function() {
        return {
            restrict: "A",
            link: function(scope,elem) {
                scope.$watch('vm.post',function(newVal){
                    if(newVal){
                        $(elem).find('img').addClass("img-responsive");
                        $(elem).find('video').addClass("img-responsive");
                        $(elem).find('audio').addClass("img-responsive");
                    }
                });
            }
        }
    });