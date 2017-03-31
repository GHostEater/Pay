/**
 * Created by GHostEater on 30-Jan-17.
 */
(function () {
    'use strict';
    angular.module('b')
        .controller("UserCtrl", function (Access,Page,User,Host,$modal) {
            Page.t("Manage Users");
            Access.adminSuper();
            var vm = this;
            vm.host = Host.host;
            vm.add = add;
            vm.edit = edit;
            vm.remove = remove;
            function getUsers(){
                User.getAll()
                    .then(function(data){
                        vm.users = data;
                    });
            }
            getUsers();

            function add(){
                var options = {
                    templateUrl: 'app/user/userAdd.html',
                    controller: "UserAddCtrl",
                    controllerAs: 'vm',
                    size: 'lg'
                };
                $modal.open(options).result
                    .then(function(){
                        getUsers();
                    });
            }
            function edit(id){
                var options = {
                    templateUrl: 'app/user/userEdit.html',
                    controller: "UserEditCtrl",
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
                        getUsers();
                    });
            }
            function remove(id){
                var options = {
                    templateUrl: 'app/user/userDelete.html',
                    controller: "UserDeleteCtrl",
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
                        getUsers();
                    });
            }
        });
})();