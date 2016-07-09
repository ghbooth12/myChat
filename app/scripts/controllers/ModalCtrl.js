(function() {
  angular
    .module('myChat')
    .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);

  function ModalCtrl($uibModalInstance, Room) {
    this.roomInfo = {};

    this.save = function() {
      $uibModalInstance.close(this.roomInfo);
    };
    this.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }
})();
