Ext.define('Ab.view.phone.Setting', {
    extend: 'Ab.view.UrlBasedPanel',
    xtype: 'phonesetting',

    requires: ['Ext.TitleBar'],

    config: {
        title: '設定',
        url: 'setting',
        iconCls: 'settings9',
        layout: 'fit',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: '設定'
            }
        ]
    }

});

