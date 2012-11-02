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
    launch: function (app) {

    },

    showList: function () {
        console.log('show list in phone');
        var me = this;
        me.getMain().setActiveItem(me.getViewPanel());
        me.getPage().setActiveItem(0);
        me.getList().refresh();
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
            me.getViewPanel().setUpdateUrl(false);
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
        var old = me.getMain().getActiveItem();
        me.getEditPanel().setUpdateUrl(updateUrl);
        me.getMain().setActiveItem(me.getEditPanel());
    }

});
