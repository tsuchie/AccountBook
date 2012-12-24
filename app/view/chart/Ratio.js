Ext.define('Ab.view.chart.Ratio', {
    extend: 'Ext.chart.PolarChart',
    xtype: 'chartratio',

    requires: [
        'Ext.data.JsonStore',
        'Ext.chart.series.Pie'
    ],

    config: {
        layout: 'fit',
        animate: true,
        insetPadding: {top: 50, left: 50, right: 50, bottom: 50}
    },

    constructor: function () {
        this.callParent(arguments);

        var store = Ext.create('Ext.data.JsonStore', {
            fields: ['category', 'account']
        });
        this.setStore(store);

        this.setSeries([{
            type: 'pie',
            rotation: -Math.PI/2,
            labelField: 'category',
            xField: 'account',
            donut: 25
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

