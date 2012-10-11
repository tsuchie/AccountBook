Ext.define('Ab.view.phone.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'phonemain',
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
            'activeitemchange': function(self, newTab, oldTab, eOpts) {
                console.log('change tab');
                newTab.mayUpdateUrl();
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
