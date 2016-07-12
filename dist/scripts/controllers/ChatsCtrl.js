(function() {
  angular
    .module('myChat')
    .controller('ChatsCtrl', ['User', 'Room', 'Messages', ChatsCtrl]);

  function ChatsCtrl(User, Room, Messages) {
    this.messages = function() {
      return Room.activeRoom.messageList;
    };

    this.addMessage = function(newContent) {
      var msg = {
        username: User.username,
        sentAt: new Date().getTime(),
        roomId: Room.activeRoom.currentRoomId,
        content: newContent
      };

      if (newContent !== null) {
        Messages.add(msg);
        this.newContent = null;
      }
    };
  }
})();
