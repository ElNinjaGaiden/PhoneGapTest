Ext.define('PhoneGapTest.view.device.DeviceInfo', {
    extend: 'PhoneGapTest.view.common.PropertiesList',
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