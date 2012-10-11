Ext.define('Ab.view.UrlBasedPanel', {
    extend: 'Ext.Container',
    xtype: 'urlbasedpanel',

    config: {
        url: '',
        updateUrl: true
    },

    mayUpdateUrl: function() {
        if (this.getUpdateUrl()) {
            console.log('update url');
            Ab.app.updateUrl(this.getUrl());
        }
        this.setUpdateUrl(true);
    }

});

