Ext.define('PhoneGapTest.controller.DeviceInfo', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.device.Device'
    ],
    
    config: {
        refs: {
            deviceInfo: 'deviceInfo'
        },
        control: {
            deviceInfo: {
                initialize: 'InitDeviceInfo'
            }
        }
    },

    InitDeviceInfo: function (view) {
        if (Ext.device.Device) {
            var store = view.getStore();
            if (store) {
                var data = [
                    {
                        Property: 'Platform',
                        Value: Ext.device.Device.platform
                    },
                    {
                        Property: 'Name',
                        Value: Ext.device.Device.name
                    },
                    {
                        Property: 'UUID',
                        Value: Ext.device.Device.uuid
                    }
                ];

                store.add(data);
            }
        }
    }
});
