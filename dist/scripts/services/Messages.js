(function() {
  angular
    .module('myChat')
    .factory('Messages', ['$firebaseArray', 'User', 'Room', Messages]);

  function Messages($firebaseArray, User, Room) {
    var firebaseRef = new Firebase('https://my-chat-c1542.firebaseio.com');
    var messages = $firebaseArray(firebaseRef.child('messages'));

    return {
      all: messages,
      add: function(newContent) {
        if (newContent) {
          var msg = {
            username: User.username,
            content: newContent,
            sentAt: new Date().getTime(),
            roomId: Room.activeRoom.currentRoomId
          };

          messages.$add(msg);
          this.newContent = null;
        }
      }
    };
  }
})();
