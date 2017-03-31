/**
 * Created by GHostEater on 29-Jan-17.
 */
(function () {
    'use strict';
    angular.module('b')
        .controller("SuperAdminAddCtrl", function (SuperAdmin,toastr,$modal,$modalInstance) {
            var vm = this;

            vm.ok = function(){
                if(vm.form.$valid){
                    SuperAdmin.add(vm.name,vm.username,vm.password,vm.acctNum,vm.acctName,vm.bank,vm.phone)
                        .then(function(){
                            toastr.success("Super Admin Added");
                            $modalInstance.close();
                        })
                        .catch(function(){
                            toastr.error("Unable to Add Super Admin");
                        });
                }
                else{
                    toastr.error("Errors in form");
                }
            };
        });
})();