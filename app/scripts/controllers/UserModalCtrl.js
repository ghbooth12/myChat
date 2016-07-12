(function() {
  angular
    .module('myChat')
    .controller('UserModalCtrl', ['$uibModalInstance', UserModalCtrl]);

  function UserModalCtrl($uibModalInstance) {
    this.save = function() {
      if (this.username) {
        $uibModalInstance.close(this.username);
      }
    };
    this.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }
})();
