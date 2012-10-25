Ext.define('Ext.ux.data.proxy.Dropbox', {
    /*global Dropbox*/
    extend: 'Ext.data.proxy.Client',

    alias: 'proxy.dropbox',

    config: {
        key: '',
        id: '',
        rememberUser: false
    },

    constructor: function (config) {
        var me = this;
        me.callParent(arguments);
        //<debug>
        if (Ext.isEmpty(config.key)) {
            Ext.Logger.error('The Ext.ux.data.proxy.Dropbox needs the encoded API key to access Dropbox.');
        }
        //</debug>
        me.client_ = new Dropbox.Client({
            key: config.key,
            sandbox: true
        });
        //TODO Change timing to auth
        me.auth();
    },

    create: function (operation, callback, scope) {
        console.log('create', arguments);
    },

    read: function (operation, callback, scope) {
        console.log('read', arguments);
    },

    update: function (operation, callback, scope) {
        console.log('update', arguments);
        var data = operation.getRecords().map(function (rec) {
            return rec.raw;
        });
        this.write('sampledata.json', JSON.stringify(data));
    },

    destroy: function (operation, callback, scope) {
        console.log('destroy', arguments);
    },

    auth: function () {
        var me = this,
            client = me.client_;
        client.authDriver(new Dropbox.Drivers.Redirect({
            rememberUser: me.getRememberUser() // if true, save auth info in local storage
        }));

        client.authenticate(function (error, client) {
            if (error) {
                return me.showError(error);
            }
            console.log('ok');
            // Update clinet_ with authenticated client.
            me.clinet_ = client;
        });
    },

    write: function (filename, data) {
        var me = this,
            client = me.client_;

        client.writeFile(filename, data, function (error, stat) {
            if (error) {
                return me.showError(error);
            }
            console.log(stat);
        });
    },

    showError: function (error) {
        //TODO implements
        console.log(error.status);
    }

});
