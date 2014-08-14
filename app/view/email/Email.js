Ext.define('PhoneGapTest.view.email.Email', {
    extend: 'Ext.form.Panel',
    xtype: 'email',
    alias: 'email',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Email'
    ],

    config: {
        title: 'Email',
        iconCls: 'write',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'ST + PhoneGap: Email'
            },
            {
                xtype: 'fieldset',
                defaults: {
                    labelWidth: '35%'
                },
                items: [
                    {
                        xtype: 'emailfield',
                        name: 'Address',
                        label: 'Address'
                    },
                    {
                        xtype: 'textfield',
                        name: 'Subject',
                        label: 'Subject'
                    },
                    {
                        xtype: 'textareafield',
                        name: 'Body',
                        label: 'Body',
                        maxRows: 10
                    }
                ]
            },
            {
                xtype: 'button',
                name: 'emailButton',
                ui: 'action',
                text: 'Send',
                margin: '0 10 0 10'
            }
        ]
    }
});