/**
 * Created by GHostEater on 19-Feb-16.
 */
(function () {
    'use strict';
angular.module('b')
    .factory("CurrentUser",function(localStorage){

        var USER_INFO = "steadyUser";

        function initialize(){
            var user = {
                id: '',
                username: '',
                name: '',
                rank: '',
                get loggedIn(){
                    return this.id;
                }
            };
            var localUser = localStorage.get(USER_INFO);
            if(localUser){
                user.id = localUser.id;
                user.username = localUser.username;
                user.name = localUser.name;
                user.rank = localUser.rank;
            }
            return user;
        }

        function setUser(id,username,name,rank){
            profile.id = id;
            profile.username = username;
            profile.name = name;
            profile.rank = rank;

            localStorage.add(USER_INFO,profile);
        }

        function logOut(){
            localStorage.remove(USER_INFO);
        }

        var profile = initialize();

        return{
            profile: profile,
            setUser: setUser,
            logOut: logOut
        }
    });
})();