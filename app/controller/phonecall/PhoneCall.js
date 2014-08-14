Ext.define('PhoneGapTest.controller.phonecall.PhoneCall', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            
        },
        control: {
            'button[name = phoneCallButton]': {
                tap: 'PhoneCallButtonTapped'
            }
        }
    },
    
    PhoneCallButtonTapped: function (button) {
        var isNative = (document.URL.match(/^https?:\/\//) === null);
        if (isNative) {
            var fieldset = button.up('formpanel');
            if (fieldset) {
                var number = fieldset.down('numberfield[name = PhoneNumber]').getValue();
                if (number) {
                    document.location.href = 'tel:' + number;
                }
            }
        }
        else {
            Ext.Msg.alert('Fail!', 'Feature does not supported!', Ext.emtpyFn);
        }
    }
});
