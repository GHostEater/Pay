/**
 * Created by GHostEater on 29-Jan-17.
 */
(function () {
    'use strict';
    angular.module('b')
        .controller("SuperAdminCtrl", function (Access,Page,SuperAdmin,Host,$modal) {
            Page.t("Manage Super Admins");
            Access.superUser();
            var vm = this;
            vm.host = Host.host;
            vm.add = add;
            vm.edit = edit;
            vm.remove = remove;
            vm.pair = pair;
            function getSuperAdmins(){
                SuperAdmin.getAll()
                    .then(function(data){
                        vm.superAdmins = data;
                    });
            }
            getSuperAdmins();

            function add(){
                var options = {
                    templateUrl: 'app/superAdmin/superAdminAdd.html',
                    controller: "SuperAdminAddCtrl",
                    controllerAs: 'vm',
                    size: 'lg'
                };
                $modal.open(options).result
                    .then(function(){
                        getSuperAdmins();
                    });
            }
            function edit(id){
                var options = {
                    templateUrl: 'app/superAdmin/superAdminEdit.html',
                    controller: "SuperAdminEditCtrl",
                    controllerAs: 'vm',
                    size: 'lg',
                    resolve:{
                        id: function(){
                            return id;
                        }
                    }
                };
                $modal.open(options).result
                    .then(function(){
                        getSuperAdmins();
                    });
            }
            function remove(id){
                var options = {
                    templateUrl: 'app/superAdmin/superAdminDelete.html',
                    controller: "SuperAdminDeleteCtrl",
                    controllerAs: 'vm',
                    size: 'sm',
                    resolve:{
                        id: function(){
                            return id;
                        }
                    }
                };
                $modal.open(options).result
                    .then(function(){
                        getSuperAdmins();
                    });
            }
            function pair(){
                var options = {
                    templateUrl: 'app/superAdmin/pair.html',
                    controller: "SuperAdminPairCtrl",
                    controllerAs: 'vm',
                    size: 'sm'
                };
                $modal.open(options).result
                    .then(function(){
                        getSuperAdmins();
                    });
            }
        });
})();