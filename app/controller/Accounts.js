Ext.define('Ab.controller.Accounts', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            'detail': 'accountdetail',
            'page': 'main #history'
        },
        control: {
            'accountlist': {
                'recordtap': 'showDetail'
            },
            'main #historyDetail': {
                'backtolist': 'showList',
                'showaction': 'showAction'
            }
        }
    },

    showList: function() {
        console.log('show list');
        this.getPage().setActiveItem(0);
    },

    showDetail: function(record) {
        console.log('show detail', record);
        this.getDetail().setRecord(record);
        this.getPage().setActiveItem(1);
    },

    showAction: function() {
        console.log('show action');
        this.getDetail().showActionSheet();
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {

    }
});
