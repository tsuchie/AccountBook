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
    }
});