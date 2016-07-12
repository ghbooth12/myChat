(function() {
  angular
    .module('myChat')
    .factory('User', ['$cookies', '$window', User]);

  function User($cookies, $window) {
    return {
      greeting: function() {
        this.username = $cookies.get('currentUser');
        if(this.username) {
          return "Hello, " + this.username;
        }
      },
      signInOut: function() {
        if(this.username) {
          $cookies.remove('currentUser');
        } else {
          $window.location.reload();
        }
      },
      signBtn: function() {
        if(this.username) {
          return "Sign Out";
        } else {
          return "Sign In";
        }
      }
    };
  }
})();
