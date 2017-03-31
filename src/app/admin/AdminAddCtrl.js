/**
 * Created by GHostEater on 24-Aug-16.
 */
(function () {
    'use strict';
    angular.module('b')
        .controller("AdminAddCtrl", function (Admin,toastr,$modal,$modalInstance) {
            var vm = this;
            
            vm.ok = function(){
                if(vm.form.$valid){
                    Admin.add(vm.name,vm.username,vm.password)
                        .then(function(){
                            toastr.success("Admin Added");
                            $modalInstance.close();
                        })
                        .catch(function(){
                            toastr.error("Unable to Add Admin");
                        });
                }
                else{
                    toastr.error("Errors in form");
                }
            };
        });
})();