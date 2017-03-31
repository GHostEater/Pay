/**
 * Created by GHostEater on 08-Apr-16.
 */
(function () {
    'use strict';
    angular.module('b')
        .factory('Host',function(){
            var host = 'php';
            return{
                host: host
            }
        });
})();