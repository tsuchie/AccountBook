Ext.define('Ab.model.Account', {
    extend: 'Ext.data.Model',

    config: {
        identifier: {
            type: 'uuid'
        },
        fields: [
            {name: 'id', type: 'auto'},
            {name: 'account', type: 'int'},
            {name: 'category', type: 'string'},
            {name: 'recorded', type: 'date'},
            {name: 'memo', type: 'string'}
        ]
    },

    setValues: function (values) {
        var me = this;
        me.getFields().each(function (field) {
            var fid = field.getName();
            if (!Ext.isEmpty(values[fid])) {
                me.set(fid, values[fid]);
            }
        });
    },

    getRecordedStr: function () {
        var date = this.get('recorded');
        return Ext.Date.format(date, 'Y/m/d');
    },

    getCategoryName: function () {
        var categoryCode = this.get('category'),
            store = Ext.getStore('Categories'),
            index =  store.find('value', categoryCode),
            category = store.getAt(index);
        return category.get('text');
    }

});
