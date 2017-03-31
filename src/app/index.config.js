(function() {
    'use strict';

    angular
        .module('b')
        .config(config);

    /** @ngInject */
    function config($logProvider, toastrConfig,CacheFactoryProvider) {
        // Enable log
        $logProvider.debugEnabled(true);

        angular.extend(CacheFactoryProvider.defaults, { maxAge: 400000 });

        // Set options third-party lib
        toastrConfig.allowHtml = true;
        toastrConfig.timeOut = 3000;
        toastrConfig.positionClass = 'toast-bottom-right';
        toastrConfig.preventDuplicates = false;
        toastrConfig.progressBar = true;
    }

})();
