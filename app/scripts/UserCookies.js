(function() {
  angular
    .module('myChat')
    .run(['$cookies', '$uibModal', UserCookies]);

  function UserCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('currentUser');

    if(!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: 'templates/userModal.html',
        controller: 'UserModalCtrl as userModal'
      })
      .result.then(function(result) {
        $cookies.put('currentUser', result);
      });
    }
  }
})();
