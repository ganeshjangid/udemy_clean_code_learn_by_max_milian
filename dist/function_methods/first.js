"use strict";
function saveUserData(user) {
    var email = user.email, password = user.password;
    return {
        id: Math.random().toString(),
        email: email,
        password: password,
    };
}
var userSave = { email: "abc@gmail.com", password: "123@" };
saveUserData(userSave);
// Better Solutions
var UserSave = /** @class */ (function () {
    function UserSave(email, password) {
        this.email = email;
        this.password = password;
        this.id = Math.random().toString();
    }
    UserSave.prototype.save = function () {
        return "Save user data";
    };
    return UserSave;
}());
var userData = new UserSave("abc@gamil.com", "123@");
console.log(userData.save());
