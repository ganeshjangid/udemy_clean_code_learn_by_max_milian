"use strict";
var Database = /** @class */ (function () {
    function Database(uri, provider) {
        this.uri = uri;
        this.provider = provider;
        this.connection = "";
    }
    Database.prototype.connectionDB = function () {
        try {
            this.connection = "this is connection ";
        }
        catch (error) {
            throw new Error(error);
        }
    };
    return Database;
}());
var conn = new Database("test", "domain.com");
conn.connectionDB();
