(function() {
  angular
    .module('myChat')
    .controller('ModalCtrl', ['$uibModalInstance', ModalCtrl]);

  function ModalCtrl($uibModalInstance) {
    this.roomInfo = {};

    this.save = function() {
      $uibModalInstance.close(this.roomInfo);
    };
    this.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }
})();
