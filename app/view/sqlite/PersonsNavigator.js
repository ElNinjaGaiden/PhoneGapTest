Ext.define('PhoneGapTest.view.sqlite.PersonsNavigator', {
    extend: 'Ext.navigation.View',
    xtype: 'personsNavigator',
    alias: 'personsNavigator',
    requires: [
        'PhoneGapTest.view.sqlite.PersonsList'
    ],

    config: {
        title: 'SQLite',
        iconCls: 'cube',

        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    align: 'right',
                    text: 'Add',
                    name: 'personsNavigatorNavButton'
                }
            ]
        },

        items: [
            {
                xtype: 'personsList'
            }
        ]
    }
});