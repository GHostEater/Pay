/**
 * Created by GHostEater on 30-Jan-17.
 */
(function () {
    'use strict';
    angular.module('b')
        .controller("UserDeleteCtrl", function(User,id,toastr,$modalInstance){
            var vm = this;

            vm.ok = function(){
                User.remove(id)
                    .then(function(){
                        toastr.success("User Removed");
                        $modalInstance.close();
                    })
                    .catch(function(){
                        toastr.error("Unable to Remove User");
                    });
            };
        });
})();