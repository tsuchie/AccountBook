Ext.define('Ab.controller.Accounts', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'accounts': 'showList',
            'accounts/new': 'showCreateForm',
            'accounts/:id': 'showDetail',
            'accounts/:id/edit': 'showEditForm'
        },
        refs: {
            'list': 'accountlist',
            'detail': 'accountdetail',
            'form': 'accountform'
        },
        control: {
            'list': {
                'recordtap': 'goDetail'
            },
            'detail': {
                'showeditform': 'goEditForm',
                'showdeleteconfirm': 'showDeleteConfirm',
                'showaction': 'showAction',
                'hideaction': 'hideAction'
            },
            'form': {
                'saverecord': 'saveRecord'
            }
        }
    },

    showList: Ext.emptyFn,

    showCreateForm: Ext.emptyFn,

    showDetail: Ext.emptyFn,

    showEditForm: Ext.emptyFn,

    goList: function () {
        console.log('go list');
        this.redirectTo('accounts');
    },

    goDetail: function (record) {
        console.log('go detail', record.get('id'));
        this.redirectTo('accounts/' + record.get('id'));
    },

    goEditForm: function (record) {
        console.log('go edit form', record.get('id'));
        this.redirectTo('accounts/' + record.get('id') + '/edit');
    },

    showAction: function (btn) {
        console.log('show action');
        this.getDetail().showActionSheet(btn);
    },

    hideAction: function () {
        console.log('hide action');
        this.getDetail().hideActionSheet();
    },

    showDeleteConfirm: function (record) {
        Ext.Msg.confirm('確認', '削除してもいいですか？', function (btn) {
            console.log(btn);
            if (btn === 'yes') {
                this.deleteRecord(record);
            }
        }, this);
    },

    saveRecord: function (record, values) {
        console.log('save record in controller', record, values);
        record.setValues(values);
        var store = Ext.getStore('Accounts');
        var id = record.get('id');
        if (Ext.isEmpty(store.findRecord('id', id))) {
            store.add(record);
        }
        store.sync();
        this.goDetail(record);
    },

    deleteRecord: function (record) {
        console.log('delete record', record);
        var store = Ext.getStore('Accounts');
        store.remove(record);
        store.sync();
        this.goList();
    },

    doWithRecord: function (id, fn) {
        var me = this;
        var store = Ext.getStore('Accounts');
        var record = store.findRecord('id', id);
        if (Ext.isEmpty(record)) {
            me.goList();
            return;
        }
        fn.call(me, record);
    },

    //called when the Application is launched, remove if not needed
    launch: function (app) {

    }

});
