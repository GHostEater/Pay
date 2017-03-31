/**
 * Created by GHostEater on 19-Feb-16.
 */
(function () {
    'use strict';
angular.module('b')
    .factory("Auth",function(Host,$http,$q){
        function login(username,password,option){
            return $http({
                    method: 'POST',
                    url: Host.host+'/login/',
                    params:{
                        option: option,
                        username: username,
                        password: password
                    }
            })
                    .then(function(response){
                        return response.data;
                    })
                    .catch(function(response){
                        return $q.reject(response.status);
                    });
        }
        return{
            login: login
        };
    });
})();