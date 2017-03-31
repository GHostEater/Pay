/**
 * Created by GHostEater on 31-Jan-17.
 */
(function () {
    'use strict';
    angular.module('b')
        .controller("SuperAdminProfileCtrl", function (Access,Page,CurrentUser,SuperAdmin,toastr,lodash) {
            Page.t("My Profile");
            Access.superUser();
            var vm = this;
            vm.confirm = confirm;
            SuperAdmin.getOne(CurrentUser.profile.id)
                .then(function(data){
                    vm.superAdmin = data;
                });
            function getPairings(){
                SuperAdmin.getPairings(CurrentUser.profile.id)
                    .then(function(data){
                        vm.pairings = lodash.filter(data,{receiverId:CurrentUser.profile.id,receiver:CurrentUser.profile.name});
                    });
            }getPairings();

            function confirm(id,giverId,receiverId,superStat,amount){
                SuperAdmin.confirm(id,giverId,receiverId,superStat,amount)
                    .then(function(){
                        getPairings();
                        toastr.success("Confirmed Successfully")
                    })
            }
        });
})();