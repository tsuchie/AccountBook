Ext.define('Ab.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ab.view.account.List',
        'Ab.view.account.Detail',
        'Ab.view.account.Form'
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
                        xtype: 'container',
                        itemId: 'historypage',
                        layout: 'card',
                        items: [
                            {
                                xtype: 'accountlist'
                            },
                            {
                                xtype: 'accountdetail'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Form',
                iconCls: 'list',
                layout: 'fit',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Test Detail'
                    },
                    {
                        xtype: 'accountform'
                    }
                ]
            }
        ]
    }
});
