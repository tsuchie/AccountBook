Ext.define('Ab.store.Categories', {
    extend: 'Ext.data.ArrayStore',

    requires: [
        'Ext.data.reader.Array'
    ],

    config: {
        model: 'Ab.model.Category',
        data: [
            ['10', '食費', '#e0440e'],
            ['20', '交通', '#e6693e'],
            ['30', '交際費', '#ec8f6e'],
            ['40', 'エンタメ', '#f3b49f'],
            ['50', '水道・光熱', '#f6c7b6']
        ]
    }

});
