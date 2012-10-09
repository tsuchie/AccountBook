Ext.define('Ab.controller.Accounts', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'accounts': 'showList',
            'account/new': 'showCreateForm',
            'account/:id': 'showDetail',
            'account/:id/edit': 'showEditForm'
        },
        refs: {
            'detail': 'accountdetail',
            'form': 'accountform',
            'page': 'main #accountPage',
            'main': 'main'
        },
        control: {
            'accountlist': {
                'recordtap': 'showDetail'
            },
            'main #accountDetail': {
                'backtolist': 'showList',
                'showaction': 'showAction'
            },
            'detail': {
                'showeditform': 'showEditForm',
                'showdeleteconfirm': 'showDeleteConfirm',
                'canselaction': 'hideAction'
            },
            'form': {
                'saverecord': 'saveRecord'
            }
        }
    },

    showList: function() {
        console.log('show list');
        this.getMain().setActiveItem(2);
        this.getPage().setActiveItem(0);
    },

    showCreateForm: function() {
    },

    showDetail: function(record) {
        console.log('show detail', record);
        this.getDetail().setRecord(record);
        this.getMain().setActiveItem(2);
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

    showDeleteConfirm: function(record) {
        Ext.Msg.confirm('確認', '削除してもいいですか？', function(btn) {
            console.log(btn);
            this.hideAction();
            if (btn === 'yes') {
                this.deleteRecord(record);
            }
        }, this);
    },

    saveRecord: function(record, values) {
        console.log('save record in controller', record, values);
        record.setValues(values);
        var store = Ext.getStore('Accounts');
        if (Ext.isEmpty(store.findRecord('id', record.get('id')))) {
            store.add(record);
        }
        store.sync();
    },

    deleteRecord: function(record) {
        //TODO implement
        console.log('deleteRecord is not implemented yet.');
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {

    }
});
