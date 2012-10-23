Ext.define('Ab.model.Category', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'value', type: 'string'},
            {name: 'text', type: 'string'},
            {name: 'color', type: 'string'}
        ]
    }

});

