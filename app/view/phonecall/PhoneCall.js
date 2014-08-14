Ext.define('PhoneGapTest.view.phonecall.PhoneCall', {
    extend: 'Ext.form.Panel',
    xtype: 'phonecall',
    alias: 'phonecall',
    requires: [
        'Ext.form.FieldSet'
    ],

    config: {
        title: 'Phone Call',
        iconCls: 'play',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'ST + PhoneGap: Phone Call'
            },
            {
                xtype: 'fieldset',
                defaults: {
                    labelWidth: '35%'
                },
                items: [
                    {
                        xtype: 'numberfield',
                        name: 'PhoneNumber',
                        label: 'Phone Number'
                    }
                ]
            },
            {
                xtype: 'button',
                name: 'phoneCallButton',
                ui: 'action',
                text: 'Call',
                margin: '0 10 0 10'
            }
        ]
    }
});