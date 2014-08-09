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
            var db = AppScope.GetDb();
            db.transaction(function (tx) {
                tx.executeSql("SELECT Id, FirstName, LastName, AddedOn FROM Persons;", [], function (tx, res) {
                    var personsStore = Ext.getStore('Persons');
                    for (var index = 0; index < res.rows.length; index++) {
                        personsStore.add(res.rows.item(index));
                    }

                }, function (e) {
                    //Error
                });
            });
        }
    }
});
