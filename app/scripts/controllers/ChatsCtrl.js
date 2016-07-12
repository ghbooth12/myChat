(function() {
  angular
    .module('myChat')
    .controller('ChatsCtrl', ['Room', 'Messages', ChatsCtrl]);

  function ChatsCtrl(Room, Messages) {
    this.messages = function() {
      return Room.activeRoom.messageList;
    };

    this.sendMessage = Messages.send;
  }
})();
