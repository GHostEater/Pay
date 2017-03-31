/**
 * Created by GHostEater on 21-Aug-16.
 */
(function () {
    'use strict';
    angular.module('b')
        .controller("AdminCtrl", function (Access,Page,Admin,Host,$modal) {
            Page.t("Manage Admins");
            Access.adminSuper();
            var vm = this;
            vm.host = Host.host;
            vm.add = add;
            vm.edit = edit;
            vm.remove = remove;
            function getAdmins(){
                Admin.getAll()
                    .then(function(data){
                        vm.admins = data;
                    });
            }
            getAdmins();

            function add(){
                var options = {
                    templateUrl: 'app/admin/adminAdd.html',
                    controller: "AdminAddCtrl",
                    controllerAs: 'vm',
                    size: 'lg'
                };
                $modal.open(options).result
                    .then(function(){
                        getAdmins();
                    });
            }
            function edit(id){
                var options = {
                    templateUrl: 'app/admin/adminEdit.html',
                    controller: "AdminEditCtrl",
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
                        getAdmins();
                    });
            }
            function remove(id){
                var options = {
                    templateUrl: 'app/admin/adminDelete.html',
                    controller: "AdminDeleteCtrl",
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
                        getAdmins();
                    });
            }
        });
})();