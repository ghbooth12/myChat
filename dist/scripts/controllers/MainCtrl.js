(function() {
  angular
    .module('myChat')
    .controller('MainCtrl', ['Room', '$uibModal', MainCtrl]);

  function MainCtrl(Room, $uibModal) {
    this.rooms = Room.all;
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
