Ext.define('Ab.view.tablet.Main', {
    extend: 'Ab.view.UrlBasedTabPanel',
    xtype: 'tabletmain',
    requires: [
        'Ab.view.tablet.Home',
        'Ab.view.tablet.Form',
        'Ab.view.tablet.Accounts',
        'Ab.view.tablet.Setting'
    ],

    config: {
        tabBarPosition: 'bottom',

        layout: {
            animation: ''
        },

        items: [
            { xtype: 'tablethome' },
            { xtype: 'tabletform' },
            { xtype: 'tabletaccounts' },
            { xtype: 'tabletsetting' }
        ]
    }
});
