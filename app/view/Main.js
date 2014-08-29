Ext.define('PhoneGapTest.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'PhoneGapTest.view.device.DeviceInfo',
        'PhoneGapTest.view.notifications.Notifications',
        'PhoneGapTest.view.connection.Connection',
        'PhoneGapTest.view.sqlite.PersonsNavigator',
        'PhoneGapTest.view.sqlite.ArtistsList',
        'PhoneGapTest.view.phonecall.PhoneCall',
        'PhoneGapTest.view.email.Email'
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
            },
            {
                xtype: 'artistsList'
            },
            {
                xtype: 'phonecall'
            },
            {
                xtype: 'email'
            }
        ]
    }
});
