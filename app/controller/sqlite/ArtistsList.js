Ext.define('PhoneGapTest.controller.sqlite.ArtistsList', {
    extend: 'Ext.app.Controller',
    requires: [
        'PhoneGapTest.view.Dummy'
    ],

    config: {
        refs: {
            artistsList: 'artistsList'
        },
        control: {
            artistsList: {
                initialize: 'Init'
            }
        }
    },

    Init: function (view) {
        if (window.sqlitePlugin) {
            try {
                //"Chinook.db", "1.0", "PhoneGap Demo", 200000
                var db = window.sqlitePlugin.openDatabase({ name: "Chinook.db" });
                db.executeSql("SELECT ArtistId, Name FROM Artist;", [], function (res) {
                    var artistsStore = Ext.getStore('Artists');
                    for (var index = 0; index < res.rows.length; index++) {
                        artistsStore.add(res.rows.item(index));
                    }

                }, function (e) {
                    //Error
                    var nav = view.up('main');
                    var dummy = Ext.create('dummy', { showText: JSON.stringify(e) });
                    nav.add(dummy);
                    view.setHtml(JSON.stringify(e));
                });
            }
            catch (e) {
                view.setHtml('Mamo');
            }
        }
        else {
            console.log('SQLite disabled');
        }
    }
});
