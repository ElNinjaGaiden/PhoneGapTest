Ext.define('PhoneGapTest.controller.Connection', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.device.Connection'
    ],
    
    config: {
        refs: {
            connection: 'connection'
        },
        control: {
            connection: {
                initialize: 'Init'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    Init: function (view) {
        var data = [];
        var store = view.getStore();

        if (Ext.device.Connection) {
            data.push({ Property: 'Is Online', Value: Ext.device.Connection.isOnline() });
            data.push({ Property: 'Connection type', Value: Ext.device.Connection.getType() });
        }

        store.add(data);
    }
});
