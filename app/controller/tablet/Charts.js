Ext.define('Ab.controller.tablet.Charts', {
    extend: 'Ab.controller.Charts',

    config: {
        refs: {
            'main': 'tabletmain',
            'home': 'tablethome'
        }
    },

    showHome: function () {
        var me = this;
        me.getMain().setActiveItem(me.getHome());
    }

});

