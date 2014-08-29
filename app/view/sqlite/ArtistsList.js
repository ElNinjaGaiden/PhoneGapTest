Ext.define('PhoneGapTest.view.sqlite.ArtistsList', {
    extend: 'Ext.List',
    xtype: 'artistsList',
    alias: 'artistsList',

    config: {
        title: 'Chinook',
        iconCls: 'cube',

        items: {
            docked: 'top',
            xtype: 'titlebar',
            title: 'ST + PhoneGap: Chinook DB'
        },

        store: 'Artists',
        itemTpl: '{ArtistId}: {Name}'
    }
});