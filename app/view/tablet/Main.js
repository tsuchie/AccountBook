Ext.define('Ab.view.tablet.Main', {
    extend: 'Ext.tab.Panel',
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

        listeners: {
            'activeitemchange': function (self, newTab, oldTab, eOpts) {
                console.log('change tab');
                newTab.mayUpdateUrl();
            }
        },

        items: [
            { xtype: 'tablethome' },
            { xtype: 'tabletform' },
            { xtype: 'tabletaccounts' },
            { xtype: 'tabletsetting' }
        ]
    }
});
