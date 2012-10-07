Ext.define('Ab.model.Account', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'id', type: 'auto'},
            {name: 'account', type: 'auto'},
            {name: 'category', type: 'auto'},
            {name: 'recorded', type: 'auto'},
            {name: 'memo', type: 'auto'}
        ]
    },

    setValues: function(values) {
        this.getFields().each(function(field) {
            var fid = field.getName();
            if (!Ext.isEmpty(values[fid])) {
                this.set(fid, values[fid]);
            }
        }, this);
    }

});
