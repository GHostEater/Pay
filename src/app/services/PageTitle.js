/**
 * Created by GHostEater on 31-Jan-17.
 */
(function () {
    'use strict';
    angular.module('b')
        .factory("Page", function ($rootScope) {
            function t(title){
                $rootScope.page = title;
            }
            return{
                t: t
            }
        });
})();