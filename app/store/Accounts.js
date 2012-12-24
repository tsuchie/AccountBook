Ext.define('Ab.store.Accounts', {
    extend: 'Ext.data.Store',

    requires: ['Ext.ux.data.proxy.Dropbox'],

    config: {
        model: 'Ab.model.Account',
        proxy: {
            type: 'localstorage',
            id: 'accounts-store'
        },
        // proxy: {
        //     type: 'dropbox',
        //     key: 'QD9zaYCkWWA=|I9xuutP94vqNuwFxNedFVcIzbqFnjzIAAZ7XGY4Z7g==',
        //     rememberUser: true
        // },
        autoLoad: true,
        sorters: 'recorded',
        grouper: {
            groupFn: function (record) {
                return record.getRecordedStr();
            }
        }
    }
});
