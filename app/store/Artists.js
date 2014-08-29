Ext.define('PhoneGapTest.store.Artists', {
    extend: 'Ext.data.Store',
    requires: [
        'PhoneGapTest.model.Artist'
    ],

    config: {
        model: 'PhoneGapTest.model.Artist'
    }
});