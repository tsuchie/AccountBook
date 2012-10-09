Ext.define('Ab.view.phone.Home', {
    extend: 'Ab.view.UrlBasedPanel',
    xtype: 'phonehome',

    require: ['Ext.TitleBar'],

    config: {
        title: 'ホーム',
        url: 'home',
        iconCls: 'home',
        layout: 'fit',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'ホーム'
            }
        ]
    }

});

