Ext.define('Ab.view.account.List', {
    extend: 'Ext.dataview.List',
    xtype: 'accountlist',

    config: {
        store: 'Accounts',
        grouped: true,
        itemTpl: new Ext.XTemplate(
            '<div>{[this.record.getCategoryName()]}</div>',
            '<div>{account}円</div>',
            '<div>{memo}</div>', {
                disableFormats: true
            }
        ),
        listeners: [
            {
                event: 'itemtap',
                fn: 'onRecordTap'
            }
        ]
    },

    /**
     * @override
     */
    prepareData: function(data, index, record) {
        this.getItemTpl().record = record;
        return this.callParent(arguments);
    },

    onRecordTap: function (self, index, target, record, e, eOpts) {
        console.log('record tappd');
        this.fireEvent('recordtap', record);
    }
});
