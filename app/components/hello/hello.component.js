(function(angular) {
  'use strict';
  angular.module("hello", []).component("helloWorld",{
    templateUrl: "app/templates/helloTemplate.html",
    bindings: {name: '@'},
    controller: helloController,
    controllerAs: 'helloCtrl'
  });
  
    function helloController(){
      var vm = this;
      vm.myName = 'lazaro';
    }



})(window.angular);