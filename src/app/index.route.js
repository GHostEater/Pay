(function() {
  'use strict';

  angular
    .module('b')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('home',{url:'/',templateUrl:'app/home.html'})

          .state('adminLogin',{url:'/admin',templateUrl:'app/login/admin.html'})
          .state('adminDash',{url:'/admin/dash',templateUrl:'app/layout/adminDash.html'})
            .state('supers',{parent:'adminDash',url:'/supers',templateUrl:'app/superAdmin/superAdmin.html'})
            .state('admins',{parent:'adminDash',url:'/admins',templateUrl:'app/admin/admin.html'})
            .state('users',{parent:'adminDash',url:'/users',templateUrl:'app/user/user.html'})
            .state('superProfile',{parent:'adminDash',url:'/profile',templateUrl:'app/superAdmin/superAdminProfile.html'})


          .state('userLogin',{url:'/login',templateUrl:'app/login/user.html'})
          .state('signUp',{url:'/signUp',templateUrl:'app/user/signUp.html'})
          .state('userProfile',{url:'/profile',templateUrl:'app/user/userProfile.html'});
    $urlRouterProvider.otherwise('/');
  }

})();
