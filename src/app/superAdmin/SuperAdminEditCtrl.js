/**
 * Created by GHostEater on 29-Jan-17.
 */
(function () {
    'use strict';
    angular.module('b')
        .controller("SuperAdminEditCtrl", function (SuperAdmin,id,toastr,$modal,$modalInstance) {
            var vm = this;
            SuperAdmin.getOne(id)
                .then(function(data){
                    vm.superAdmin = data;
                });

            vm.ok = function(){
                if(vm.form.$dirty && vm.form.$valid){
                    SuperAdmin.edit(id,vm.superAdmin.name,vm.superAdmin.username,vm.superAdmin.password,vm.superAdmin.acctNum,
                        vm.superAdmin.acctName,vm.superAdmin.bank,vm.superAdmin.phone)
                        .then(function(){
                            toastr.success("Super Admin Changed");
                            $modalInstance.close();
                        })
                        .catch(function(){
                            toastr.error("Unable to Change Super Admin");
                        });
                }
                else if(vm.form.$pristine && vm.form.$valid){
                    toastr.info("No Changes");
                    $modalInstance.close();
                }
                else if(vm.form.$invalid){
                    toastr.error("Errors in form");
                }
            };
        });
})();