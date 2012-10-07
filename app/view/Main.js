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
        listeners: {
            'activeitemchange': function(self, value, oldValue, eOpts) {
                console.log(value, oldValue);
                if (value.getItemId() === 'form') {
                    value.down('accountform').setup();
                }
            }
        },
        items: [
            {
                title: 'ホーム',
                iconCls: 'home',
                layout: 'fit',
                itemId: 'home',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'ホーム'
                    }
                ]
            },
            {
                title: '入力する',
                iconCls: 'compose1',
                layout: 'fit',
                itemId: 'form',

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
            },
            {
                title: '履歴',
                iconCls: 'list',
                layout: 'fit',
                itemId: 'history',

                items: [
                    {
                        xtype: 'container',
                        itemId: 'historyPage',
                        layout: 'card',
                        items: [
                            {
                                itemId: 'historyList',
                                layout: 'fit',
                                items:[
                                    {
                                        docked: 'top',
                                        xtype: 'titlebar',
                                        title: '履歴'
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
                                        title: '履歴',
                                        items: [
                                            {
                                                xtype: 'button',
                                                ui: 'back',
                                                text: '戻る',
                                                itemId: 'backToListButton'
                                            },
                                            {
                                                xtype: 'button',
                                                align: 'right',
                                                ui: 'flat',
                                                itemId: 'actionButton',
                                                iconCls: 'action',
                                                iconMask: true
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'accountdetail'
                                    }
                                ],
                                listeners: [
                                    {
                                        delegate: '#backToListButton',
                                        event: 'tap',
                                        fn: function () {
                                            console.log('back to list listeners');
                                            this.fireEvent('backtolist');
                                        }
                                    },
                                    {
                                        delegate: '#actionButton',
                                        event: 'tap',
                                        fn: function () {
                                            console.log('action button');
                                            this.fireEvent('showaction');
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: '設定',
                iconCls: 'settings9',
                layout: 'fit',
                itemId: 'setting',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: '設定'
                    }
                ]
            }
        ]
    }
});
