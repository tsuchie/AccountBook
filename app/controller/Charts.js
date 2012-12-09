Ext.define('Ab.controller.Charts', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ab.service.Accounts',
        'Ab.view.chart.Daily',
        'Ab.view.chart.Ratio'
    ],

    config: {
        routes: {
            'home': 'showHome'
        },
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

    showHome: Ext.emptyFn,

    loadDailyData: function () {
        console.log('load daily data');
        var me = this,
            data = [1, 2, 3, 4, 5, 6]; //TODO implement
        me.getDaily().setData(data);
    },


    loadRatioData: function () {
        console.log('load ratio data');
        var me = this,
            data = me.getService().aggregateByCategories();
        me.getRatio().setData(data);
    },

    getService: function () {
        console.log('get accounts service');
        var me = this;
        //TODO remove
        // service may be created in init method
        if (!me.service_) {
            console.log('create accounts service @getter');
            me.service_ = Ext.create('Ab.service.Accounts', {
                accounts: Ext.getStore('Accounts'),
                categories: Ext.getStore('Categories')
            });
        }
        return me.service_;
    },

    init: function () {
        console.log('init charts controller');
        var me = this;
        if (!me.service_) {
            console.log('create accounts service @init');
            me.service_ = Ext.create('Ab.service.Accounts', {
                accounts: Ext.getStore('Accounts'),
                categories: Ext.getStore('Categories')
            });
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function (app) {
        console.log('charts launch constructor');
    }

});

