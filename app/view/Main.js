Ext.define('Ab.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ab.view.account.List',
        'Ab.view.account.Detail'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'List',
                iconCls: 'list',
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
            },
            {
                title: 'Detail',
                iconCls: 'list',
                layout: 'fit',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Test Detail'
                    },
                    {
                        xtype: 'accountdetail',
                        data: {
                            id: '1',
                            account: '1000',
                            category: '10',
                            recorded: '2012-10-07 12:00:00',
                            memo: 'Red bull'
                        }
                    }
                ]
            }
        ]
    }
});
