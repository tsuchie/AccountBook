Ext.define('Ab.view.account.Detail', {
    extend: 'Ext.form.Panel',
    xtype: 'accountdetail',

    requires: [
        'Ext.ActionSheet',
        'Ab.view.account.FieldSet'
    ],

    config: {
        items: [
            {
                xtype: 'accountfieldset',
                defaults: {
                    disabled: true,
                    disabledCls: null,
                    component: {
                        disabled: true,
                        disabledCls: null
                    }
                }
            }
        ]
    },

    constructor: function () {
        var me = this;
        me.callParent();
        me.actionSheet = Ext.create('Ext.ActionSheet', {
            hidden: true,
            itemId: 'actionSheet',
            items: [
                {
                    text: '編集',
                    handler: function () {
                        me.fireEvent('hideaction');
                        me.fireEvent('showeditform', me.getRecord());
                    }
                },
                {
                    text: '削除',
                    ui  : 'decline',
                    handler: function () {
                        me.fireEvent('hideaction');
                        me.fireEvent('showdeleteconfirm', me.getRecord());
                    }
                },
                {
                    text: 'キャンセル',
                    ui  : 'confirm',
                    handler: function () {
                        me.fireEvent('canselaction');
                    }
                }
            ]
        });
        Ext.Viewport.add(me.actionSheet);
    },

    showActionSheet: function () {
        this.actionSheet.show();
    },

    hideActionSheet: function () {
        this.actionSheet.hide();
    }

});
