Ext.define('PhoneGapTest.view.common.PropertiesList', {
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