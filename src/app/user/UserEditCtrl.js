/**
 * Created by GHostEater on 30-Jan-17.
 */
(function () {
    'use strict';
    angular.module('b')
        .controller("UserEditCtrl", function (User,id,toastr,$modal,$modalInstance) {
            var vm = this;
            User.getOne(id)
                .then(function(data){
                    vm.user = data;
                });

            vm.ok = function(){
                if(vm.form.$dirty && vm.form.$valid){
                    User.edit(id,vm.user.name,vm.user.username,vm.user.password,vm.user.email,vm.user.sex,vm.user.dateBirth,
                        vm.user.state,vm.user.city,vm.user.acctNum,vm.user.acctName,vm.user.bank,vm.user.phone,vm.user.balance)
                        .then(function(){
                            toastr.success("User Changed");
                            $modalInstance.close();
                        })
                        .catch(function(){
                            toastr.error("Unable to Change User");
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