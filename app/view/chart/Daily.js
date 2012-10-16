Ext.define('Ab.view.chart.Daily', {
    extend: 'Ext.chart.CartesianChart',
    xtype: 'chartdaily',

    requires: [
        'Ext.data.JsonStore',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Bar'
    ],

    config: {
        layout: 'fit',
        animate: true,
        axes: [
            {
                type: 'numeric',
                position: 'left',
                fields: ['account'],
                title: {
                    text: '金額',
                    fontSize: 14
                },
                grid: true,
                minimum: 0
            },
            {
                type: 'numeric',
                position: 'bottom',
                fields: ['day'],
                title: {
                    text: '日付',
                    fontSize: 14
                },
                minimum: 0,
                maximum: 31
            }
        ]
    },


    constructor: function () {
        this.callParent(arguments);

        var store = Ext.create('Ext.data.JsonStore', {
            fields: ['day', 'account']
        });
        this.setStore(store);

        this.setSeries([{
            type: 'bar',
            subStyle: {
                fill: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
            },
            xField: 'day',
            yField: 'account'
        }]);

        // sample data
        this.setData(Array(30).join().split(',').map(function () {
            return Math.random() * 5000 | 0;
        }));
    },


    setData: function (data) {
        var me = this;

        function getRoundedMax(data) {
            var max = Math.max.apply(null, data),
                digit =  Math.floor(Math.log(max) / Math.log(10)),
                unit = Math.pow(10, digit);
            max = Math.ceil(max / unit) * unit;
            return max;
        }

        me.getAxes()[0].setMaximum(getRoundedMax(data));

        var mapped = data.map(function (rec, index) {
            return {
                'day': index + 1,
                'account': rec
            };
        });
        me.getStore().setData(mapped);
    }

});

