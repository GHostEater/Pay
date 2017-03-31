/**
 * Created by GHostEater on 02-Sep-16.
 */
(function () {
    'use strict';
    angular.module('b')
        .controller("AdminDashController", function (Page,Access,CurrentUser,SuperAdmin,lodash) {
            Page.t("Admin Dashboard");
            Access.adminSuper();
            var vm = this;
            vm.user = CurrentUser.profile;

            SuperAdmin.getPairings(CurrentUser.profile.id)
                .then(function(data){
                    vm.pairings = lodash.filter(data,{status:1,receiverId:CurrentUser.profile.id});
                });
        });
})();