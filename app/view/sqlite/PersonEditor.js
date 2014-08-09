Ext.define('PhoneGapTest.view.sqlite.PersonEditor', {
    extend: 'Ext.form.Panel',
    xtype: 'personEditor',
    alias: 'personEditor',
    requires: [
        'Ext.form.FieldSet'
    ],

    config: {
        title: 'New person',
        styleHtmlContent: true,
        items: [
            {
                xtype: 'fieldset',
                defaults: {
                    labelWidth: '35%'
                },
                items: [
                    {
                        xtype: 'textfield',
                        name: 'FirstName',
                        label: 'First name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'LastName',
                        label: 'Last name'
                    }
                ]
            },
            {
                xtype: 'button',
                name: 'saveNewPersonButton',
                text: 'Save'
            }
        ]
    }
});