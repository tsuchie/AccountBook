Ext.define('Ab.view.account.List', {
    extend: 'Ext.dataview.List',
    xtype: 'accountlist',

    config: {
        store: 'Accounts',
        grouped: true,
        itemTpl: new Ext.XTemplate(
            '<div>',
                '<span class="ab-account">{account}円</span>',
                '<span class="ab-category-name">{[this.record.getCategoryName()]}</span>',
                '<div class="ab-memo">{memo}</div>',
            '</div>',
            {
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
