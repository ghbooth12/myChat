(function() {
  angular
    .module('myChat', ['ui.router', 'firebase'])
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
        templateUrl: '/templates/main.html'
      });
  }
})();
