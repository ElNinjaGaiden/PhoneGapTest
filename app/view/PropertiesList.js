Ext.define('PhoneGapTest.view.PropertiesList', {
    extend: 'Ext.List',
    xtype: 'propertiesList',
    requires: [
        'Ext.TitleBar',
        'PhoneGapTest.model.DeviceProperty'
    ],

    config: {
        store: {
            model: 'PhoneGapTest.model.DeviceProperty'
        },

        itemTpl: '{Property}: {Value}'
    }
});