(function() {
  'use strict';

  angular
    .module('b')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope) {
      $rootScope.date = new Date();
  }

})();
