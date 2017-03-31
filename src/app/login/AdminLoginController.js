/**
 * Created by GHostEater on 19-Feb-16.
 */
(function () {
    'use strict';
angular.module('b')
    .controller("AdminLoginController",function(Page,Auth,$location,CurrentUser,toastr){
        Page.t("Admin Login");
        var vm = this;
        vm.user = CurrentUser.profile;
        vm.login = login;
        if(vm.user.loggedIn && (vm.user.rank == 1 || vm.user.rank == 2)){
            $location.url('/admin/dash');
        }

        function login(username,password,option){
            vm.userError = false;
            vm.passError = false;
            Auth.login(username,password,option)
                .then(function(data){
                    CurrentUser.setUser(data.id,data.username,data.name,data.rank);
                    toastr.success("Login Successful");
                    $location.url('/admin/dash');
                })
                .catch(function(error){
                    if(error === 401){
                        toastr.error("Incorrect Username");
                        vm.userError = true;
                    }
                    else if(error === 402){
                        toastr.error("Incorrect Password");
                        vm.passError = true;
                    }
                    else{
                        toastr.warning("Could not Connect to Server");
                    }
                });
        }
    });
})();