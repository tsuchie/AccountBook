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
                label: 'カテゴリ',
                options: [
                    //TODO get from categories store
                    {text: '食費', value: '10'},
                    {text: '交通', value: '20'},
                    {text: '交際費', value: '30'},
                    {text: 'エンタメ', value: '40'},
                    {text: '水道・光熱', value: '50'}
                ]
            },
            {
                xtype: 'datepickerfield',
                name: 'recorded',
                label: '日付',
                value: new Date()
            },
            {
                xtype: 'textareafield',
                name: 'memo',
                label: 'メモ'
            }
        ]
    }

});

