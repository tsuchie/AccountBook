Ext.define('Ab.view.account.FieldSet', {
    extend: 'Ext.form.FieldSet',
    xtype: 'accountfieldset',

    requires: [
        'Ext.ux.field.Calculator',
        'Ext.field.Select',
        'Ext.field.DatePicker'
    ],

    config: {
        items: [
            {
                xtype: 'calculatorfield',
                name: 'account',
                label: '金額'
            },
            {
                xtype: 'selectfield',
                name: 'category',
                label: 'カテゴリ'
            },
            {
                xtype: 'datepickerfield',
                name: 'recorded',
                label: '日付',
                value: new Date(),
                dateFormat: 'Y/m/d'
            },
            {
                xtype: 'textareafield',
                name: 'memo',
                label: 'メモ'
            }
        ]
    },

    constructor: function () {
        var me = this;
            options = Ext.getStore('Categories').getAllAsOptions();
        me.callParent(arguments);
        me.down('selectfield').setOptions(options);
    }


});

