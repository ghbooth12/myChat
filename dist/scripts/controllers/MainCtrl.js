(function() {
  angular
    .module('myChat')
    .controller('MainCtrl', ['Room', '$uibModal', 'User', MainCtrl]);

  function MainCtrl(Room, $uibModal, User) {
    this.room = Room;
    this.user = User;
    this.openModal = function() {
      $uibModal
        .open({
          templateUrl: 'templates/modal.html',
          controller: 'ModalCtrl as modal'
        })
        .result.then(function(roomInfo) {
          Room.add(roomInfo);
        });
    };
  }
})();
