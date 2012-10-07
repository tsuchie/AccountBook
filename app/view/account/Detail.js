Ext.define('Ab.view.account.Detail', {
    extend: 'Ext.Container',
    xtype: 'accountdetail',

    requires: [
        'Ext.ActionSheet'
    ],

    config: {
        tpl: [
            '<div>{recorded}</div>',
            '<div>{category}</div>',
            '<div>{account}</div>',
            '<div>{memo}</div>'
        ]
    },

    constructor: function () {
        this.callParent();
        this.actionSheet = Ext.create('Ext.ActionSheet', {
            hidden: true,
            itemId: 'actionSheet',
            items: [
                {
                    text: '編集'
                },
                {
                    text: '削除',
                    ui  : 'decline'
                },
                {
                    text: 'キャンセル',
                    ui  : 'confirm'
                }
            ]
        });
        Ext.Viewport.add(this.actionSheet);
    },

    showActionSheet: function () {
        this.actionSheet.show();
    }

});
