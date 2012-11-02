Ext.define('Ab.view.tablet.Accounts', {
    extend: 'Ab.view.UrlBasedPanel',
    xtype: 'tabletaccounts',

    requires: [
        'Ext.TitleBar',
        'Ab.view.account.List',
        'Ab.view.account.Detail'
    ],

    config: {
        title: '履歴',
        url: 'accounts',
        iconCls: 'list',
        layout: 'fit',

        items: {
            xtype: 'container',
            itemId: 'accountPage',
            layout: 'hbox',
            items: [
                {
                    itemId: 'accountList',
                    layout: 'fit',
                    flex: 1,
                    items: [
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
                    itemId: 'accountDetail',
                    layout: 'fit',
                    flex: 2,
                    items: [
                        {
                            docked: 'top',
                            xtype: 'titlebar',
                            title: '',
                            items: [
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
                            delegate: '#actionButton',
                            event: 'tap',
                            fn: function () {
                                console.log('action button');
                                this.down('accountdetail').fireEvent('showaction');
                            }
                        }
                    ]
                }
            ]
        }
    }

});

