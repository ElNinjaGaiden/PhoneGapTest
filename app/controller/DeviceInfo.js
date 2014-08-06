Ext.define('PhoneGapTest.controller.DeviceInfo', {
    extend: 'Ext.app.Controller',
    
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
        var html = [
            'Device name: ' + window.device.name,
            'Device platform: ' + window.device.platform,
            'Device UUID: ' + window.device.uuid
        ].join('\n');

        view.setHtml(html);
    }
});
