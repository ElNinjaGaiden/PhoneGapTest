Ext.define('PhoneGapTest.view.sqlite.PersonsList', {
    extend: 'Ext.List',
    xtype: 'personsList',
    alias: 'personsList',
    requires: [
        'PhoneGapTest.model.Person'
    ],

    config: {
        title: 'SQLite',
        iconCls: 'cube',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'ST + PhoneGap: SQLite'
            }
        ],

        store: {
            model: 'PhoneGapTest.model.Person'
        },

        itemTpl: '{FirstName} {LastName}'
    }
});