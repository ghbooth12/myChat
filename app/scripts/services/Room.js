(function() {
  angular
    .module('myChat')
    .factory('Room', ['$firebaseArray', Room]);

  function Room ($firebaseArray) {
    var firebaseRef = new Firebase('https://my-chat-c1542.firebaseio.com');
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    var roomObj = {
      all: rooms,
      activeRoom: {
        selectRoom: function(room) {
          this.currentRoom = room;
          this.currentRoomId = room.$id;
          this.messageList = roomObj.getMessages(room.$id);
        }
      },
      add: function(info) {
        rooms.$add({name: info.name, description: info.description});
      },
      getMessages: function(roomId) {
        return $firebaseArray(firebaseRef.child('messages').orderByChild('roomId').equalTo(roomId));
      }
    };

    return roomObj;
  }
})();
