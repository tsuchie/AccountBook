Ext.define('Ab.view.tablet.Setting', {
    extend: 'Ab.view.UrlBasedPanel',
    xtype: 'tabletsetting',

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

