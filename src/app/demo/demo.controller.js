(function() {
  'use strict';

  angular.module('ttdDemo')
    .controller('DemoCtrl', DemoCtrl);

  function DemoCtrl(appConf, $state){
    var vm = this;

    vm.state = $state;

  }
})();
