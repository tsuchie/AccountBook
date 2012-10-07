Ext.define('Ab.controller.Accounts', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            'detail': 'accountdetail',
            'page': 'main #history'
        },
        control: {
            'accountlist': {
                'recordtap': 'onRecordTap'
            },
            'main #historyDetail': {
                'backtolist': 'onBackToList'
            }
        }
    },

    onRecordTap: function(record) {
        console.log('record tap', record);
        this.getDetail().setRecord(record);
        this.getPage().setActiveItem(1);
    },

    onBackToList: function() {
        console.log('back to list in controller');
        this.getPage().setActiveItem(0);
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {

    }
});
