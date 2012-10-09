Ext.define('Ab.view.phone.Form', {
    extend: 'Ab.view.UrlBasedPanel',
    xtype: 'phoneform',

    requires: [
        'Ext.TitleBar',
        'Ab.view.account.Form'
    ],

    config: {
        title: '入力する',
        url: 'account/new',
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

