(function() {
  angular
    .module('myChat', ['ui.router', 'firebase', 'ui.bootstrap'])
    .config(config);

  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('main', {
        url: '/',
        controller: 'MainCtrl as main',
        templateUrl: '/templates/main.html'
      });
  }
})();
