(function() {
  angular
    .module('myChat')
    .factory('User', User);

  function User() {
    var userObj = {
      username: null,
      joinUser: function() {
        if(this.username !== null) {
          this.joinedUser = true;
        }
      }
    };

    return userObj;
  }
})();
