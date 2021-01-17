"use strict";
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var admin = new User();
// Database class
var PostGresSQLDatabase = /** @class */ (function () {
    function PostGresSQLDatabase() {
    }
    return PostGresSQLDatabase;
}());
var connection = new PostGresSQLDatabase();
var DiskStorage = /** @class */ (function () {
    function DiskStorage(storageDirectory) {
        this.storePath = "";
        this.storePath = storageDirectory;
        this.testFunction();
    }
    DiskStorage.prototype.testFunction = function () {
        return this.testFunction2();
    };
    DiskStorage.prototype.testFunction2 = function () {
        return "Hello World";
    };
    return DiskStorage;
}());
var diskStorage = new DiskStorage("test");
diskStorage.testFunction();
