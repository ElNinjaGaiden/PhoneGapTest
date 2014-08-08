Ext.define('PhoneGapTest.view.notifications.Notifications', {
    extend: 'Ext.form.Panel',
    xtype: 'notifications',
    alias: 'notifications',
    requires: [
        'Ext.form.FieldSet'
    ],

    config: {
        title: 'Notifications',
        iconCls: 'check',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'ST + PhoneGap: Notifications'
            },
            {
                xtype: 'fieldset',
                defaults: {
                    labelWidth: '30%'
                },
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Title',
                        name: 'Title'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Message',
                        name: 'Message'
                    }
                ]
            },
            {
                xtype: 'button',
                name: 'notificationButton',
                ui: 'action',
                text: 'Notify!',
                margin: '0 10 20 10'
            },
            {
                xtype: 'button',
                name: 'beepButton',
                ui: 'action',
                text: 'Beep!',
                margin: '0 10 20 10'
            },
            {
                xtype: 'button',
                name: 'vibrationButton',
                ui: 'action',
                text: 'Vibrate!',
                margin: '0 10 20 10'
            }
        ]
    }
});