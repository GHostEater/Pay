/**
 * Created by GHostEater on 01-Feb-17.
 */
(function () {
    'use strict';
    angular.module('b')
        .controller("UserProfileCtrl", function (Access,Page,CurrentUser,User,toastr,lodash) {
            Page.t("My Profile");
            Access.user();
            var vm = this;
            vm.confirm = confirm;
            vm.ph = ph;
            vm.gh = gh;
            function getUser(){
                User.getOne(CurrentUser.profile.id)
                    .then(function(data){
                        vm.user = data;
                    });
            }getUser();
            function getPairings(){
                User.getPairings(CurrentUser.profile.id)
                    .then(function(data){
                        vm.toBePaid = lodash.filter(data,{receiverId:CurrentUser.profile.id,receiver:CurrentUser.profile.name});
                        vm.toPay = lodash.filter(data,{giverId:CurrentUser.profile.id,giver:CurrentUser.profile.name});
                    });
            }getPairings();

            function confirm(id,giverId,receiverId,superStat,amount){
                SuperAdmin.confirm(id,giverId,receiverId,superStat,amount)
                    .then(function(){
                        getPairings();
                        getUser();
                        toastr.success("Confirmed Successfully");
                    })
            }
            function ph(amount){
                if(Number(amount) > 0){
                    User.provideHelp(vm.user.id,amount)
                        .then(function(){
                            getPairings();
                            getUser();
                            toastr.success("Help Provided Successfully");
                        });
                }
            }
            function gh(){
                User.getPaid(vm.user.id,vm.amount)
                    .then(function(){
                        getPairings();
                        getUser();
                        toastr.success("Got Paid Successfully");
                    });
            }
        });
})();