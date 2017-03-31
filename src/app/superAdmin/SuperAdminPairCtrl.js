/**
 * Created by GHostEater on 31-Jan-17.
 */
(function () {
    'use strict';
    angular.module('b')
        .controller("SuperAdminPairCtrl", function(SuperAdmin,toastr,$modalInstance){
            var vm = this;
            SuperAdmin.getAll().then(function(data){vm.superAdmins = data});

            vm.ok = function(){
                if(Number(vm.amount) > 0){
                    for(var i=0; i<vm.superAdmins.length; i++){
                        SuperAdmin.pair(vm.superAdmins[i].id,vm.amount)
                            .then(function(){
                                toastr.success("Paired Successfully");
                            })
                            .catch(function(){
                                toastr.error("Paring Not Successful");
                            })
                    }
                    $modalInstance.close();
                }
            };
        });
})();