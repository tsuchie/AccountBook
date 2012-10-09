Ext.define('Ab.view.phone.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ab.view.phone.Home',
        'Ab.view.phone.Form',
        'Ab.view.phone.Accounts',
        'Ab.view.phone.Setting'
    ],

    config: {
        tabBarPosition: 'bottom',

        layout: {
            animation: ''
        },

        listeners: {
            'activeitemchange': function(self, value, oldValue, eOpts) {
                console.log(value, oldValue);
                if (oldValue.getUpdateUrl()) {
                    Ab.app.updateUrl(value.getUrl());
                }
            }
        },

        items: [
            { xtype: 'phonehome' },
            { xtype: 'phoneform' },
            { xtype: 'phoneaccounts' },
            { xtype: 'phonesetting' }
        ]
    }
});
