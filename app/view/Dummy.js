Ext.define('PhoneGapTest.view.Dummy', {
    extend: 'Ext.form.Panel',
    xtype: 'dummy',
    alias: 'dummy',

    config: {

        items: [
            {
                xtype: 'textareafield',
                label: 'JSON',
                maxRows: 10
            }
        ]
    }
});