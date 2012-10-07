Ext.define('Ab.controller.Accounts', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            'detail': 'accountdetail',
            'form': 'accountform',
            'page': 'main #history',
            'main': 'main'
        },
        control: {
            'accountlist': {
                'recordtap': 'showDetail'
            },
            'main #historyDetail': {
                'backtolist': 'showList',
                'showaction': 'showAction'
            },
            'detail': {
                'showeditform': 'showEditForm',
                'showdeleteconfirm': 'showDeleteConfirm',
                'canselaction': 'hideAction'
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

    hideAction: function() {
        console.log('show action');
        this.getDetail().hideActionSheet();
    },

    showEditForm: function(record) {
        console.log('show action');
        this.hideAction();
        this.getForm().setRecord(record);
        this.getMain().setActiveItem(1);
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {

    }
});
