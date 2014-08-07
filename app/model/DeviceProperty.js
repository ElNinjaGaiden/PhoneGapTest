Ext.define('PhoneGapTest.model.DeviceProperty', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'Property', type: 'string' },
            { name: 'Value', type: 'string' }
        ]
    }
});
