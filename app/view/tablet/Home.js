Ext.define('Ab.view.tablet.Home', {
    extend: 'Ab.view.UrlBasedPanel',
    xtype: 'tablethome',

    requires: [
        'Ext.TitleBar',
        'Ext.carousel.Carousel',
        'Ab.view.chart.Daily',
        'Ab.view.chart.Ratio'
    ],

    config: {
        title: 'ホーム',
        url: 'home',
        iconCls: 'home',
        layout: 'hbox',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'ホーム'
            },
            {
                xtype: 'chartdaily',
                flex: 1
            },
            {
                xtype: 'chartratio',
                flex: 1
            }
        ],

        listeners: [
            {
                event: 'show',
                fn: function () {
                    console.log('show chart');
                    this.down('chartdaily').fireEvent('loaddata');
                    this.down('chartratio').fireEvent('loaddata');
                }
            }
        ]
    }

});

