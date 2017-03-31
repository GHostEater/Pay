/**
 * Created by GHostEater on 01-Feb-17.
 */
(function () {
    'use strict';
    angular.module('b')
        .controller("UserLoginCtrl", function(Page,Auth,$location,CurrentUser,toastr){
            Page.t("Login");
            var vm = this;
            vm.user = CurrentUser.profile;
            vm.login = login;
            if(vm.user.loggedIn && (vm.user.rank == 1 || vm.user.rank == 2)){
                $location.url('/admin/dash');
            }
            else if(vm.user.loggedIn && vm.user.rank == 3){
                $location.url('/profile');
            }

            function login(username,password){
                vm.userError = false;
                vm.passError = false;
                Auth.login(username,password,'user')
                    .then(function(data){
                        CurrentUser.setUser(data.id,data.username,data.name,data.rank);
                        toastr.success("Login Successful");
                        $location.url('/profile');
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