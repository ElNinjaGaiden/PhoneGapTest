Ext.define('PhoneGapTest.controller.email.Email', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.device.Device'
    ],
    
    config: {
        refs: {
            emailButton: 'button[name = emailButton]'
        },
        control: {
            emailButton: {
                tap: 'EmailButtonTapped'
            }
        }
    },
    
    EmailButtonTapped: function (button) {
        var formPanel = button.up('formpanel');
        if (formPanel) {
            var values = formPanel.getValues();
            if (values.Address) {
                var mailUrl = 'mailto:' + values.Address + '?subject=' + values.Subject + '&body=' + values.Body;
                Ext.device.Device.openURL(mailUrl);
            }
        }
    }
});
