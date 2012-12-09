Ext.define('Ab.view.phone.Main', {
    extend: 'Ab.view.UrlBasedTabPanel',
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

        items: [
            { xtype: 'phonehome' },
            { xtype: 'phoneform' },
            { xtype: 'phoneaccounts' },
            { xtype: 'phonesetting' }
        ]
    }
});
