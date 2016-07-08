(function() {
  angular
    .module('myChat')
    .factory('Room', ['$firebaseArray', Room]);

  function Room ($firebaseArray) {
    var firebaseRef = new Firebase('https://my-chat-c1542.firebaseio.com');
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    return {
      all: rooms
    };
  }
})();
