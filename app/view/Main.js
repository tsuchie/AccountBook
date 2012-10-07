Ext.define('Ab.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ab.view.account.List'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Test',
                iconCls: 'trash',
                layout: 'fit',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Test'
                    },
                    {
                        xtype: 'accountlist'
                    }
                ]
            }
        ]
    }
});
