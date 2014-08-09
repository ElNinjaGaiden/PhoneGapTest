Ext.define('PhoneGapTest.controller.sqlite.PersonsList', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            personsList: 'personsList'
        },
        control: {
            personsList: {
                initialize: 'Init'
            }
        }
    },
    
    Init: function (view) {
        if (window.sqlitePlugin) {
            var db = window.sqlitePlugin.openDatabase({ name: "PhoneGapTest.db" });

            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS Persons (Id INTEGER PRIMARY KEY ASC, FirstName TEXT, LastName TEXT, AddedOn DATETIME)');
            });

            db.transaction(function (tx) {
                tx.executeSql("select Id, FirstName, LastName, AddedOn from Persons;", [], function (tx, res) {
                    var personsStore = Ext.getStore('Persons');
                    for (var index = 0; index < res.rows.length; index++) {
                        personsStore.add(res.rows.item(index));
                    }

                }, function (e) {
                });
            });
        }
    }
});
