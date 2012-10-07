Ext.define('Ab.store.Accounts', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Ab.model.Account',
        proxy: {
            type: 'localstorage',
            id: 'accounts-store'
        },
        autoLoad: true
    }
});
