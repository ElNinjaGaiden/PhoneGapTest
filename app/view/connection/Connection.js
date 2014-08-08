Ext.define('PhoneGapTest.view.connection.Connection', {
    extend: 'PhoneGapTest.view.common.PropertiesList',
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