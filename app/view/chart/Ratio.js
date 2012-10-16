Ext.define('Ab.view.chart.Ratio', {
    extend: 'Ext.chart.PolarChart',
    xtype: 'chartratio',

    requires: [
        'Ext.data.JsonStore',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Pie',
        'Ext.chart.interactions.Rotate'
    ],

    config: {
        layout: 'fit',
        animate: true
    },

    constructor: function () {
        this.callParent(arguments);

        var store = Ext.create('Ext.data.JsonStore', {
            fields: ['category', 'account']
        });
        this.setStore(store);

        this.setSeries([{
            type: 'pie',
            labelField: 'category',
            xField: 'account',
            donut: 30,
            subStyle: {
                fill: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
            }
        }]);

        // sample data
        this.setData(['食費', '交通', '交際費', 'エンタメ', '水道・光熱'].map(function (cat) {
            return {
                category: cat,
                account: ((Math.random() * 10 | 0) + 3) * 1000
            };
        }));
    },


    setData: function (data) {
        var me = this;
        me.getStore().setData(data);
    }

});

