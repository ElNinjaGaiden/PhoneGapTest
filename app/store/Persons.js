Ext.define('PhoneGapTest.store.Persons', {
    extend: 'Ext.data.Store',
    requires: [
        'PhoneGapTest.model.Person'
    ],

    config: {
        model: 'PhoneGapTest.model.Person'
    }
});