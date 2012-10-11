Ext.define('Ab.view.account.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'accountform',

    requires: [
        'Ab.view.account.FieldSet'
    ],

    config: {
        items: [
            {
                xtype: 'accountfieldset'
            },
            {
                layout: {
                    type: 'vbox',
                    pack:'center',
                    align: 'center'
                },
                items: {
                    xtype: 'button',
                    ui: 'action',
                    text: '記録する',
                    width: '80%',
                    minWidth: '200px',
                    handler: function() {
                        var form = this.up('accountform');
                        console.log(
                            'save record', form.getRecord(), form.getValues());
                        form.fireEvent(
                            'saverecord', form.getRecord(), form.getValues());
                    }
                }
            }
        ]
    },

    setup: function() {
        var now = new Date();
        var id = now.getTime() + '_' + (Math.random() * 1000 | 0);
        console.log('setup form', id);
        var record = Ext.create('Ab.model.Account', {
            id: id,
            account: '0',
            category: '10',
            recorded: now,
            memo: ''
        });
        this.setRecord(record);
    }

});

