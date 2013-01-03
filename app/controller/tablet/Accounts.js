Ext.define('Ab.controller.tablet.Accounts', {
    extend: 'Ab.controller.Accounts',

    config: {
        refs: {
            'page': 'tabletmain #accountPage',
            'main': 'tabletmain',
            'editPanel': 'tabletform',
            'viewPanel': 'tabletaccounts'
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function (app) {

    },

    showList: function () {
        console.log('show list in tablet');
        var me = this;
        me.getMain().setActiveItem(me.getViewPanel());
        me.getPage().setActiveItem(0);
    },

    showCreateForm: function () {
        var me = this;
        me.getForm().setup();
        me.showForm(true);
    },

    showDetail: function (id) {
        console.log('show detail', id);
        var me = this;
        me.doWithRecord(id, function (record) {
            me.getDetail().setRecord(record);
            me.getMain().setActiveItem(me.getViewPanel());
            me.getPage().setActiveItem(1);
        });
    },

    showEditForm: function (id) {
        console.log('show edit form');
        var me = this;
        me.doWithRecord(id, function (record) {
            me.getForm().setRecord(record);
            me.showForm(false);
        });
    },

    showForm: function (updateUrl) {
        var me = this;
        me.getMain().setActiveItem(me.getEditPanel());
    }

});

