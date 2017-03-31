/**
 * Created by GHostEater on 02-Sep-16.
 */
(function () {
    'use strict';
    angular.module('b')
        .factory("Access", function (toastr,$location,CurrentUser) {
            function superUser(){
                if(!CurrentUser.profile.rank == 1 || !CurrentUser.profile.loggedIn){
                    $location.url('/');
                    toastr.error('Unauthorized Access');
                }
            }
            function admin() {
                if(!CurrentUser.profile.rank == 2 || !CurrentUser.profile.loggedIn){
                    $location.url('/');
                    toastr.error('Unauthorized Access');
                }
            }
            function adminSuper() {
                if(CurrentUser.profile.rank == 3 || !CurrentUser.profile.loggedIn){
                    $location.url('/');
                    toastr.error('Unauthorized Access');
                }
            }
            function user() {
                if(!CurrentUser.profile.rank == 3 || !CurrentUser.profile.loggedIn){
                    $location.url('/');
                    toastr.error('Unauthorized Access');
                }
            }
            return{
                superUser: superUser,
                admin: admin,
                adminSuper: adminSuper,
                user: user
            }
        });
})();