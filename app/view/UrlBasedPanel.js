Ext.define('Ab.view.UrlBasedPanel', {
    extend: 'Ext.Container',
    xtype: 'urlbasedpanel',

    config: {
        url: '',
        updateUrl: true
    },

    mayUpdateUrl: function () {
        var me = this;
        if (me.getUpdateUrl()) {
            console.log('update url');
            Ab.app.updateUrl(me.getUrl());
        }
        me.setUpdateUrl(true);
    }

});

