Ext.define('PhoneGapTest.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'PhoneGapTest.view.DeviceInfo',
        'PhoneGapTest.view.Notifications'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'deviceInfo'
            },
            {
                xtype: 'notifications'
            }
        ]
    }
});
