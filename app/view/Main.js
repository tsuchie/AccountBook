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
                        xtype: 'container',
                        itemId: 'history',
                        layout: 'card',
                        items: [
                            {
                                itemId: 'historyList',
                                layout: 'fit',
                                items:[
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
                                itemId: 'historyDetail',
                                items:[
                                    {
                                        docked: 'top',
                                        xtype: 'titlebar',
                                        title: 'Test',
                                        items: [
                                            {
                                                xtype: 'button',
                                                ui: 'back',
                                                text: '戻る',
                                                itemId: 'backToList'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'accountdetail'
                                    }
                                ],
                                listeners: [
                                    {
                                        delegate: '#backToList',
                                        event: 'tap',
                                        fn: function () {
                                            console.log('back to list listeners');
                                            this.fireEvent('backtolist');
                                        }
                                    }
                                ]
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
