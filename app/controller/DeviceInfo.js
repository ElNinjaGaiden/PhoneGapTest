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
        var data = [];
        var store = view.getStore();

        if (Ext.device.Device) {
            data.push({ Property: 'Platform', Value: Ext.device.Device.platform });
            data.push({ Property: 'Name', Value: Ext.device.Device.name });
            data.push({ Property: 'UUID', Value: Ext.device.Device.uuid });
        }

        store.add(data);
    }
});
