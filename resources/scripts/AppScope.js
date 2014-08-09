function AppScope() {
    this.db = '';
}

AppScope.prototype = {
    constructor: AppScope,

    GetDb: function () {
        if (!this.db) {
            //Create the database
            this.db = window.sqlitePlugin.openDatabase({ name: "PhoneGapTest.db" });
            //Initialize tables
            this.db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS Persons (Id INTEGER PRIMARY KEY ASC, FirstName TEXT, LastName TEXT, AddedOn DATETIME)');
            });
        }
        return this.db;
    }
}