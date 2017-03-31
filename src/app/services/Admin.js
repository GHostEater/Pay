/**
 * Created by GHostEater on 01-Sep-16.
 */
(function () {
    'use strict';
    angular.module('b')
        .factory("Admin", function (Host,CacheFactory,$http,$q,lodash) {
            if (!CacheFactory.get('adminCache')) {
                CacheFactory.createCache('adminCache',{
                    deleteOnExpire: 'aggressive',
                    recycleFreq: 60000
                });
            }
            var adminCache = CacheFactory.get('adminCache');
            function getAll(){
                return $http.get(Host.host+'/admin/',{cache:adminCache})
                    .then(function(response){
                        return response.data;
                    })
                    .catch(function(response){
                        return $q.reject(response.status);
                    });
            }
            function getOne(id){
                return $http.get(Host.host+'/admin/',{cache:adminCache})
                    .then(function(response){
                        return lodash.find(response.data,{'id':id});
                    })
                    .catch(function(response){
                        return $q.reject(response.status);
                    });
            }
            function add(name,username,password){
                adminCache.removeAll();
                return $http({
                    method: 'POST',
                    url: Host.host+'/admin/',
                    params:{
                        option: 'post',
                        name: name,
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
            function edit(id,name,username,password){
                adminCache.removeAll();
                return $http({
                    method: 'POST',
                    url: Host.host+'/admin/',
                    params: {
                        option: 'put',
                        id: id,
                        name: name,
                        username: username,
                        password: password
                    }
                })
                    .then(function(response){
                        return response.status;
                    })
                    .catch(function(response){
                        return $q.reject(response.status);
                    });
            }
            function remove(id){
                adminCache.removeAll();
                return $http({
                    method: 'POST',
                    url: Host.host+'/admin/',
                    params: {
                        option: 'delete',
                        id: id
                    }
                })
                    .then(function(response){
                        return response.status;
                    })
                    .catch(function(response){
                        return $q.reject(response.status);
                    });
            }
            return{
                add: add,
                edit: edit,
                remove: remove,
                getOne: getOne,
                getAll: getAll
            }
        });
})();