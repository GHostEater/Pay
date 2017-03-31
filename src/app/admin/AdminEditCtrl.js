/**
 * Created by GHostEater on 25-Aug-16.
 */
(function () {
    'use strict';
    angular.module('b')
        .controller("AdminEditCtrl", function (Admin,id,toastr,$modal,$modalInstance) {
            var vm = this;
            Admin.getOne(id)
                .then(function(data){
                    vm.admin = data;
                });
            
            vm.ok = function(){
                if(vm.form.$dirty && vm.form.$valid){
                    Admin.edit(id,vm.admin.name,vm.admin.username,vm.admin.password)
                        .then(function(){
                            toastr.success("Admin Changed");
                            $modalInstance.close();
                        })
                        .catch(function(){
                            toastr.error("Unable to Change Admin");
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