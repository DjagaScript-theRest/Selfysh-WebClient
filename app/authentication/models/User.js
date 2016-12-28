"use strict";
var User = (function () {
    function User(username, email, password, confirmedPassword) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.confirmedPassword = confirmedPassword;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map