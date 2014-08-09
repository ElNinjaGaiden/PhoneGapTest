Ext.define('PhoneGapTest.view.sqlite.PersonsList', {
    extend: 'Ext.List',
    xtype: 'personsList',
    alias: 'personsList',

    config: {
        title: 'ST + PhoneGap: SQLite',
        store: 'Persons',
        itemTpl: '{FirstName} {LastName}'
    }
});