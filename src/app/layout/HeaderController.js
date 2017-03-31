/**
 * Created by GHostEater on 20-Feb-16.
 */
(function () {
    'use strict';
angular.module('b')
    .controller("HeaderController",function(CurrentUser,$rootScope,Host,$window){
        var vm = this;
        vm.host = Host.host;
        vm.user = CurrentUser.profile;
        $rootScope.user = CurrentUser.profile;

        vm.logOut = function(){
            CurrentUser.logOut();
            delete vm.user;
            delete $rootScope.user;
            $window.location.reload();

        };
    });
})();