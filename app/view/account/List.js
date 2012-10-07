Ext.define('Ab.view.account.List', {
    extend: 'Ext.dataview.List',
    xtype: 'accountlist',
    config: {
        store: 'Accounts',
        itemTpl: [
            '<div>{recorded}</div>',
            '<div>{category}</div>',
            '<div>{account}</div>',
            '<div>{memo}</div>'
        ]
    }
});
