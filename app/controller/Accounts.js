Ext.define('Ab.controller.Accounts', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            'detail': 'accountdetail',
            'page': 'main #historypage'
        },
        control: {
            'accountlist': {
                'recordtap': 'onRecordTap'
            }
        }
    },

    onRecordTap: function(record) {
        console.log('record tap', record);
        this.getDetail().setRecord(record);
        this.getPage().setActiveItem(1);
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {

    }
});
