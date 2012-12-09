Ext.define('Ab.view.UrlBasedTabPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'urlbasedtabpanel',

    config: {
        listeners: {
            'activeitemchange': function (self, newTab, oldTab, eOpts) {
                var me = this;
                if (newTab.isXType('urlbasedpanel') && me.updateUrl_) {
                    Ab.app.redirectTo(newTab.getUrl());
                }
                me.updateUrl_ = true;
            }
        }
    },

    initialize: function () {
        var me = this;
        me.callParent(arguments);
        me.updateUrl_ = true;
    },

    changeTab: function (newTab) {
        var me = this;
        if (this.getActiveItem() !== newTab) {
            me.updateUrl_ = false;
            me.setActiveItem(newTab);
        }
    }
});

