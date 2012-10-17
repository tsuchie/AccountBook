Ext.define('Ab.controller.Charts', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ab.view.chart.Daily',
        'Ab.view.chart.Ratio'
    ],

    config: {
        refs: {
            'daily': 'chartdaily',
            'ratio': 'chartratio'
        },
        control: {
            'daily': {
                'loaddata': 'loadDailyData'
            },
            'ratio': {
                'loaddata': 'loadRatioData'
            }
        }
    },


    loadDailyData: function () {
        console.log('load daily data');
        var me = this,
            data = [1, 2, 3, 4, 5, 6]; //TODO implement
        me.getDaily().setData(data);
    },


    loadRatioData: function () {
        console.log('load ratio data');
        var me = this,
            data = [ //TODO implement
                {category: 'hoge', account: 80, color: '#e0440e'},
                {category: 'fuga', account: 30, color: '#e6693e'},
                {category: 'piyo', account: 50, color: '#ec8f6e'},
                {category: 'foo', account: 40, color: '#f3b49f'},
                {category: 'bar', account: 20, color: '#f6c7b6'}
            ];
        me.getRatio().setData(data);
    },


    //called when the Application is launched, remove if not needed
    launch: function (app) {

    }

});

