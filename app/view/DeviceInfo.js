Ext.define('PhoneGapTest.view.DeviceInfo', {
    extend: 'Ext.List',
    xtype: 'deviceInfo',
    alias: 'deviceInfo',
    requires: [
        'Ext.TitleBar',
        'PhoneGapTest.model.DeviceData'
    ],

    config: {
        title: 'Device',
        iconCls: 'home',

        items: {
            docked: 'top',
            xtype: 'titlebar',
            title: 'ST + PhoneGap: Device info'
        },

        store: {
            model: 'PhoneGapTest.model.DeviceData'
        },

        itemTpl: '{Property}: {Value}'
    }
});