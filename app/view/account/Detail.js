Ext.define('Ab.view.account.Detail', {
    extend: 'Ext.form.Panel',
    xtype: 'accountdetail',

    requires: [
        'Ext.ActionSheet',
        'Ab.view.account.FieldSet'
    ],

    config: {
        actionSheetConfig: {},
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

    constructor: function (config) {
        var me = this;
        me.callParent(arguments);

        me.actionSheet = Ext.create('Ext.ActionSheet', Ext.merge({
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
        }, config.actionSheetConfig));
        Ext.Viewport.add(me.actionSheet);

    },

    showActionSheet: function (btn) {
        if (btn) {
            this.actionSheet.showBy(btn);
        } else {
            this.actionSheet.show();
        }
    },

    hideActionSheet: function () {
        this.actionSheet.hide();
    }

});
