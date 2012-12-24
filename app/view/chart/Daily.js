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
        insetPadding: {top: 20, left: 20, right: 20, bottom: 20},
        innerPadding: {top: 0, left: 0, right: 5, bottom: 0},
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
                minimum: 0
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
            style: {
                minGapWidth: 2,
                fill: '#e0440e'
            },
            xField: 'day',
            yField: 'account'
        }]);
    },


    setData: function (data) {
        var me = this,
            axes = me.getAxes();

        function getRoundedMax(data) {
            var max = Math.max.apply(null, data),
                digit =  Math.floor(Math.log(max) / Math.log(10)),
                unit = Math.pow(10, digit);
            max = Math.ceil(max / unit) * unit;
            return max;
        }

        axes[0].setMaximum(getRoundedMax(data));
        axes[1].setMaximum(data.length);

        var records = data.map(function (rec, index) {
            return {
                'day': index + 1,
                'account': rec
            };
        });
        me.getStore().setData(records);
    }

});

