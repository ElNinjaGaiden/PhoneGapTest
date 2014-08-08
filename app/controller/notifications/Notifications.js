Ext.define('PhoneGapTest.controller.notifications.Notifications', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            notificationButton: 'button[name = notificationButton]',
            beepButton: 'button[name = beepButton]',
            vibrationButton: 'button[name = vibrationButton]'
        },
        control: {
            notificationButton: {
                tap: 'Notify'
            },
            beepButton: {
                tap: 'Beep'
            },
            vibrationButton: {
                tap: 'Vibrate'
            }
        }
    },
    
    Notify: function (button) {
        if (navigator.notification && typeof navigator.notification.alert === 'function') {
            var data = button.up('formpanel').getValues();
            navigator.notification.alert(data.Message, Ext.emtpyFn, data.Title, 'Go away');
        }
        else {
            Ext.Msg.alert('Fail!', 'Feature does not supported!', Ext.emtpyFn);
        }
    },

    Beep: function (button) {
        if (navigator.notification && typeof navigator.notification.beep === 'function') {
            navigator.notification.beep(3);
        }
        else {
            Ext.Msg.alert('Fail!', 'Feature does not supported!', Ext.emtpyFn);
        }
    },

    Vibrate: function (button) {
        if (navigator.notification && typeof navigator.notification.vibrate === 'function') {
            navigator.notification.vibrate(1500);
        }
        else {
            Ext.Msg.alert('Fail!', 'Feature does not supported!', Ext.emtpyFn);
        }
    }
});
