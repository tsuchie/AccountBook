Ext.define('Ab.view.phone.Home', {
    extend: 'Ab.view.UrlBasedPanel',
    xtype: 'phonehome',

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
        layout: 'fit',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'ホーム'
            },
            {
                xtype: 'carousel',
                items: [
                    { xtype: 'chartdaily' },
                    { xtype: 'chartratio' }
                ]
            }
        ]
    }

});

