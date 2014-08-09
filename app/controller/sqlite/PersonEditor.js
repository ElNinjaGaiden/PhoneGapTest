Ext.define('PhoneGapTest.controller.sqlite.PersonEditor', {
    extend: 'Ext.app.Controller',
    requires: [
        'PhoneGapTest.view.Dummy'
    ],
    
    config: {
        refs: {
            saveNewPersonButton: 'button[name = saveNewPersonButton]'
        },
        control: {
            saveNewPersonButton: {
                tap: 'SaveNewPersonButtonTapped'
            }
        }
    },

    SaveNewPersonButtonTapped: function (button) {
        var controller = this;
        if (window.sqlitePlugin) {
            var form = button.up('formpanel');
            if (form) {
                var data = form.getValues();
                if (data.FirstName && data.LastName) {
                    var navigator = form.up('navigationview');
                    var db = window.sqlitePlugin.openDatabase({ name: "PhoneGapTest.db" });
                    db.transaction(function (tx) {
                        var parameters = [data.FirstName, data.LastName, new Date()];
                        tx.executeSql("INSERT INTO Persons (FirstName, LastName, AddedOn) VALUES (?,?,?)", parameters,
                                      function (tx, res) { controller.PersonAdded(tx, res, form, navigator); },
                                      function (e) { });
                    });
                    
                }
            }
        }
    },

    PersonAdded: function (tx, res, form, navigator) {
        tx.executeSql('select Id, FirstName, LastName, AddedOn from Persons WHERE Id=?;', [res.insertId], function (tx, res) {
            var personsStore = Ext.getStore('Persons');
            personsStore.add(res.rows.item(0));
            navigator.pop();
        });
    }
});
