(function() {
  angular
    .module('myChat')
    .controller('MainCtrl', ['Room', MainCtrl]);

  function MainCtrl(Room) {
    this.rooms = Room.all;
  }
})();
