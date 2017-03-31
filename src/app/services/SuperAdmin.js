/**
 * Created by GHostEater on 28-Jan-17.
 */
(function () {
    'use strict';
    angular.module('b')
        .factory("SuperAdmin", function (Host,CacheFactory,$http,$q,lodash) {
            if (!CacheFactory.get('superAdminCache')) {
                CacheFactory.createCache('superAdminCache',{
                    deleteOnExpire: 'aggressive',
                    recycleFreq: 60000
                });
            }
            if (!CacheFactory.get('pairingsCache')) {
                CacheFactory.createCache('pairingsCache',{
                    deleteOnExpire: 'aggressive',
                    recycleFreq: 60000
                });
            }
            var superAdminCache = CacheFactory.get('superAdminCache');
            var pairingsCache = CacheFactory.get('pairingsCache');
            function getAll(){
                return $http.get(Host.host+'/superAdmin/',{cache:superAdminCache})
                    .then(function(response){
                        return response.data;
                    })
                    .catch(function(response){
                        return $q.reject(response.status);
                    });
            }
            function getOne(id){
                return $http.get(Host.host+'/superAdmin/',{cache:superAdminCache})
                    .then(function(response){
                        return lodash.find(response.data,{'id':id});
                    })
                    .catch(function(response){
                        return $q.reject(response.status);
                    });
            }
            function add(name,username,password,acctNum,acctName,bank,phone){
                superAdminCache.removeAll();
                return $http({
                    method: 'POST',
                    url: Host.host+'/superAdmin/',
                    params:{
                        option: 'post',
                        name: name,
                        username: username,
                        password: password,
                        acctNum: acctNum,
                        acctName: acctName,
                        bank: bank,
                        phone: phone
                    }
                })
                    .then(function(response){
                        return response.data;
                    })
                    .catch(function(response){
                        return $q.reject(response.status);
                    });
            }
            function edit(id,name,username,password,acctNum,acctName,bank,phone){
                superAdminCache.removeAll();
                return $http({
                    method: 'POST',
                    url: Host.host+'/superAdmin/',
                    params: {
                        option: 'put',
                        id: id,
                        name: name,
                        username: username,
                        password: password,
                        acctNum: acctNum,
                        acctName: acctName,
                        bank: bank,
                        phone: phone
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
                superAdminCache.removeAll();
                return $http({
                    method: 'POST',
                    url: Host.host+'/superAdmin/',
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
            function getPaid(id,amount){
                pairingsCache.removeAll();
                return $http({
                    method: 'POST',
                    url: Host.host+'/user/',
                    params: {
                        option: 'gh',
                        id: id,
                        amount: amount,
                        superStat: 1
                    }
                })
                    .then(function(response){
                        return response.status;
                    })
                    .catch(function(response){
                        return $q.reject(response.status);
                    });
            }
            function confirm(id,giverId,receiverId,superStat,amount){
                pairingsCache.removeAll();
                return $http({
                    method: 'POST',
                    url: Host.host+'/user/',
                    params: {
                        option: 'confirm',
                        id: id,
                        giverId: giverId,
                        receiverId: receiverId,
                        superStat: superStat,
                        amount: amount,
                        date: new Date()
                    }
                })
                    .then(function(response){
                        return response.status;
                    })
                    .catch(function(response){
                        return $q.reject(response.status);
                    });
            }
            function getPairings(id){
                return $http({
                    method: 'POST',
                    url: Host.host+'/user/',
                    params: {
                        option: 'pairings',
                        id: id
                    },
                    cache: pairingsCache
                })
                    .then(function(response){
                        return response.data;
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
                getAll: getAll,
                getPaid: getPaid,
                getPairings: getPairings,
                confirm: confirm
            }
        });
})();