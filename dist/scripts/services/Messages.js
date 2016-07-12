(function() {
  angular
    .module('myChat')
    .factory('Messages', ['$firebaseArray', Messages]);

  function Messages($firebaseArray) {
    var firebaseRef = new Firebase('https://my-chat-c1542.firebaseio.com');
    var messages = $firebaseArray(firebaseRef.child('messages'));

    return {
      all: messages,
      add: function(msg) {
        messages.$add({
          username: msg.username,
          content: msg.content,
          sentAt: msg.sentAt,
          roomId: msg.roomId
        });
      }
    };
  }
})();
