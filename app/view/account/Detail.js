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
        var me = this;
        this.callParent();
        this.actionSheet = Ext.create('Ext.ActionSheet', {
            hidden: true,
            itemId: 'actionSheet',
            items: [
                {
                    text: '編集',
                    handler: function() {
                        me.fireEvent('showeditform', me.getRecord());
                    }
                },
                {
                    text: '削除',
                    ui  : 'decline',
                    handler: function() {
                        me.fireEvent('showdeleteconfirm', me.getRecord());
                    }
                },
                {
                    text: 'キャンセル',
                    ui  : 'confirm',
                    handler: function() {
                        me.fireEvent('canselaction');
                    }
                }
            ]
        });
        Ext.Viewport.add(this.actionSheet);
    },

    showActionSheet: function () {
        this.actionSheet.show();
    },

    hideActionSheet: function () {
        this.actionSheet.hide();
    }

});
