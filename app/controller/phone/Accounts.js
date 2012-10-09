Ext.define('Ab.controller.phone.Accounts', {
    extend: 'Ab.controller.Accounts',

    config: {
        routes: {
            'accounts': 'showList',
            'account/new': 'showCreateForm',
            'account/:id': 'showDetail',
            'account/:id/edit': 'showEditForm'
        },
        refs: {

        },
        control: {

        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {

    },

    showList: function() {
        console.log('show list in phone');
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

    showEditForm: function(record) {
        console.log('show action');
        this.hideAction();
        this.getForm().setRecord(record);
        this.getMain().setActiveItem(1);
    }

});
