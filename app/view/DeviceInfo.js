Ext.define('PhoneGapTest.view.DeviceInfo', {
    extend: 'PhoneGapTest.view.PropertiesList',
    xtype: 'deviceInfo',
    alias: 'deviceInfo',

    config: {
        title: 'Device',
        iconCls: 'home',

        items: {
            docked: 'top',
            xtype: 'titlebar',
            title: 'ST + PhoneGap: Device info'
        }
    }
});