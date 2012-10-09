Ext.define('Ab.store.Accounts', {
    extend: 'Ext.data.Store',

    requires: ['Ext.data.proxy.LocalStorage'],

    config: {
        model: 'Ab.model.Account',
        proxy: {
            type: 'localstorage',
            id: 'accounts-store'
        },
        autoLoad: true
    }
});
