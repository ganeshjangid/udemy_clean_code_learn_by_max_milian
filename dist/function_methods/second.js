"use strict";
var saveUserData1 = createUser({
    email: "abc@gmail.com",
    password: "abc@123",
});
console.log(saveUserData1);
function createUser(data) {
    var email = data.email, password = data.password;
    var isValidInput = inputIsValid1({ email: email, password: password });
    if (!isValidInput)
        return showErrorMsg("Invalid Parameter");
    return saveUserInDB(email, password);
}
function inputIsValid1(data) {
    var email = data.email, password = data.password;
    return email && email.includes("@") && password && password.trim() !== "";
}
function showErrorMsg(msg) {
    console.log(msg);
}
function saveUserInDB(email, password) {
    return {
        email: email,
        password: password,
        status: 200,
        message: "Successfully Data Save!",
    };
}
