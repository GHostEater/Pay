/**
 * Created by GHostEater on 29-Jan-17.
 */
(function () {
    'use strict';
    angular.module('b')
        .controller("SuperAdminDeleteCtrl", function(SuperAdmin,id,toastr,$modalInstance){
            var vm = this;

            vm.ok = function(){
                SuperAdmin.remove(id)
                    .then(function(){
                        toastr.success("Super Admin Removed");
                        $modalInstance.close();
                    })
                    .catch(function(){
                        toastr.error("Unable to Remove Super Admin");
                    });
            };
        });
})();