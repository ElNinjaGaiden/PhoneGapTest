Ext.define('PhoneGapTest.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'PhoneGapTest.view.device.DeviceInfo',
        'PhoneGapTest.view.notifications.Notifications',
        'PhoneGapTest.view.connection.Connection',
        'PhoneGapTest.view.sqlite.PersonsNavigator'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'deviceInfo'
            },
            {
                xtype: 'notifications'
            },
            {
                xtype: 'connection'
            },
            {
                xtype: 'personsNavigator'
            }
        ]
    }
});
