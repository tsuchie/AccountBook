Ext.define('Ext.ux.data.proxy.Dropbox', {
    /*global Dropbox*/
    extend: 'Ext.data.proxy.Client',

    alias: 'proxy.dropbox',

    config: {
        key: '',
        id: '',
        rememberUser: false,
        enablePagingParams: false,
        filePath: 'sample.dat'
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
        console.log('read');
        var me = this,
            path = me.selectFilePath();

        me.cache_ = me.cache_ || {};
        me.cache_[path] = me.cache_[path] || {};

        me.readFile(path, onDataRead);

        function onDataRead(success, data) {
            var reader = me.getReader(),
                Model = me.getModel(),
                sorters = operation.getSorters(),
                filters = operation.getFilters(),
                start = operation.getStart(),
                limit = operation.getLimit(),
                resultSet, records, collection;

            try {
                resultSet = reader.read(data);
            } catch (e) {
                operation.setException(e.message);
                me.fireEvent('exception', me, data, operation);
                return;
            }

            records = resultSet.getRecords();
            me.updateCache(path, records);

            collection = Ext.create('Ext.util.Collection');

            // First we comply to filters
            if (filters && filters.length) {
                collection.setFilters(filters);
            }
            // Then we comply to sorters
            if (sorters && sorters.length) {
                collection.setSorters(sorters);
            }

            collection.addAll(records);

            if (me.getEnablePagingParams() && start !== undefined && limit !== undefined) {
                records = collection.items.slice(start, start + limit);
            } else {
                records = collection.items.slice();
            }

            operation.setSuccessful();
            operation.setCompleted();

            resultSet.setRecords(records);
            operation.setRecords(records);

            if (typeof callback === 'function') {
                callback.call(scope || me, operation);
            }
        }
    },

    update: function (operation, callback, scope) {
        console.log('update');
        var me = this,
            records = operation.getRecords(),
            path = me.selectFilePath(records);

        me.updateCache(path, records);
        me.writeFile(path, JSON.stringify(me.getCacheAsData(path)));
        if (typeof callback === 'function') {
            callback.call(scope || me, operation);
        }
    },

    destroy: function (operation, callback, scope) {
        console.log('destroy');
        var me = this,
            records = operation.getRecords(),
            path = me.selectFilePath(records);

        me.removeCache(path, records);
        me.writeFile(path, JSON.stringify(me.getCacheAsData(path)));
        if (typeof callback === 'function') {
            callback.call(scope || me, operation);
        }
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

    readFile: function (path, callback) {
        var me = this,
            client = me.client_;

        client.readFile(path, function (error, data) {
            console.log(path, error, data);
            if (error) {
                return me.showError(error);
            }
            callback.call(me, true, data);
        });
    },

    writeFile: function (path, data) {
        var me = this,
            client = me.client_;

        client.writeFile(path, data, function (error, stat) {
            if (error) {
                return me.showError(error);
            }
            console.log(stat);
        });
    },

    showError: function (error) {
        //TODO implements
        console.log(error.status);
    },

    selectFilePath: function (data) {
        var me = this,
            path = me.getFilePath();

        if (typeof path === 'function') {
            path = path.call(me, data);
        }
        if (!path || path.length === 0) {
            //TODO Throw exception?
            path = 'sample.dat';
        }
        return path;
    },

    updateCache: function (key, records) {
        var me = this,
            cache = me.getCache(key);

        records.forEach(function (rec) {
            cache[rec.getId()] = rec.getData();
        });
    },

    removeCache: function (key, records) {
        var me = this,
            cache = me.getCache(key);

        records.forEach(function (rec) {
            delete cache[rec.getId()];
        });
    },

    getCache: function (key) {
        var me = this;
        me.cache_ = me.cache_ || {};
        me.cache_[key] = me.cache_[key] || {};
        return me.cache_[key];
    },

    getCacheAsData: function (key) {
        var me = this,
            cache = me.getCache(key);
        return Object.keys(cache).map(function (id) {
            return cache[id];
        });
    }

});
