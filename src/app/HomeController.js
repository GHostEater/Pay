/**
 * Created by GHostEater on 19-Feb-16.
 */
(function () {
    'use strict';
angular.module("b")
    .controller("HomeController",function($rootScope,Host){
        $rootScope.page = "Home";
        var vm = this;
        vm.host = Host.host;
    });
})();