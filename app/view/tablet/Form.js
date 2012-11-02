Ext.define('Ab.view.tablet.Form', {
    extend: 'Ab.view.UrlBasedPanel',
    xtype: 'tabletform',

    requires: [
        'Ext.TitleBar',
        'Ab.view.account.Form'
    ],

    config: {
        title: '入力する',
        url: 'accounts/new',
        iconCls: 'compose1',
        layout: 'fit',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: '入力する'
            },
            {
                xtype: 'accountform'
            }
        ]
    }

});

