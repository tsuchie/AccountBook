Ext.define('Ab.controller.Accounts', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            'detail': 'accountdetail',
            'tab': 'main'
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
        this.getTab().setActiveItem(1);
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {

    }
});
