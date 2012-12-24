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
        animate: true,
        insetPadding: {top: 30, left: 30, right: 30, bottom: 30}
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
            donut: 30
        }]);
    },


    setData: function (data) {
        var me = this;
        me.getStore().setData(data);
        me.getSeries()[0].setSubStyle({
            fill: data.map(function (rec) {
                return rec.color;
            })
        });
    }

});

