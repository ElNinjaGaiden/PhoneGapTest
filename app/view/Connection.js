Ext.define('PhoneGapTest.view.Connection', {
    extend: 'PhoneGapTest.view.PropertiesList',
    xtype: 'connection',
    alias: 'connection',

    config: {
        title: 'Connection',
        iconCls: 'network',

        items: {
            docked: 'top',
            xtype: 'titlebar',
            title: 'ST + PhoneGap: Connection'
        }
    }
});