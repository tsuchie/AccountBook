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
                'backtolist': 'showList'
            }
        }
    },

    showDetail: function(record) {
        console.log('show detail', record);
        this.getDetail().setRecord(record);
        this.getPage().setActiveItem(1);
    },

    showList: function() {
        console.log('show list');
        this.getPage().setActiveItem(0);
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {

    }
});
