/**
 * Created by GHostEater on 07-Feb-17.
 */
(function () {
    'use strict';
    angular.module('b')
        .controller("SignUpCtrl", function (Page,User,toastr,$location) {
            Page.t("Register");
            var vm = this;
            vm.ok = function(){
                if(vm.form.$valid){
                    User.add(vm.name,vm.username,vm.password,vm.email,vm.sex,vm.dateBirth,vm.state,vm.city,vm.acctNum,
                        vm.acctName,vm.bank,vm.phone,vm.balance)
                        .then(function(){
                            toastr.success("User Added");
                            $location.url('/login');
                        })
                        .catch(function(){
                            toastr.error("Unable to Add User");
                        });
                }
                else{
                    toastr.error("Errors in form");
                }
            };
        });
})();