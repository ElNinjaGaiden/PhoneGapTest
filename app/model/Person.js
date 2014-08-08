Ext.define('PhoneGapTest.model.Person', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'Id', type: 'integer' },
            { name: 'FirstName', type: 'string' },
            { name: 'LastName', type: 'string' },
            { name: 'AddedOn', type: 'date' }
        ]
    }
});
