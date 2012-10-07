Ext.define('Ab.store.Accounts', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Ab.model.Account',
        data: [
            {
                id: '1',
                account: '1000',
                category: '10',
                recorded: '2012-10-07 12:00:00',
                memo: 'Red bull'
            },
            {
                id: '2',
                account: '2000',
                category: '20',
                recorded: '2012-10-08 12:00:00',
                memo: 'Espressoda'
            }
        ],
        autoLoad: true
    }
});
