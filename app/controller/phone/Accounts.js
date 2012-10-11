Ext.define('Ab.controller.phone.Accounts', {
    extend: 'Ab.controller.Accounts',

    config: {
        refs: {
            'page': 'phonemain #accountPage',
            'main': 'phonemain',
            'editPanel': 'phoneform',
            'viewPanel': 'phoneaccounts'
        },
        control: {
            'phonemain #accountDetail': {
                'backtolist': 'goList'
            }
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {

    },

    showList: function() {
        console.log('show list in phone');
        this.getMain().setActiveItem(this.getViewPanel());
        this.getPage().setActiveItem(0);
    },

    showCreateForm: function() {
        this.getForm().setup();
        this.showForm(true);
    },

    showDetail: function(id) {
        console.log('show detail', id);
        this.doWithRecord(id, function(record) {
            this.getDetail().setRecord(record);
            this.getViewPanel().setUpdateUrl(false);
            this.getMain().setActiveItem(this.getViewPanel());
            this.getPage().setActiveItem(1);
        });
    },

    showEditForm: function(id) {
        console.log('show edit form');
        this.doWithRecord(id, function(record) {
            this.getForm().setRecord(record);
            this.showForm(false);
        });
    },

    showForm: function(updateUrl) {
        var old = this.getMain().getActiveItem();
        this.getEditPanel().setUpdateUrl(updateUrl);
        this.getMain().setActiveItem(this.getEditPanel());
    },

    doWithRecord: function(id, fn) {
        var store = Ext.getStore('Accounts');
        var record = store.findRecord('id', id);
        if (Ext.isEmpty(record)) {
            this.goList();
            return;
        }
        fn.call(this, record);
    }

});
