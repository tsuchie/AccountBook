Ext.define('Ab.controller.phone.Charts', {
    extend: 'Ab.controller.Charts',

    config: {
        refs: {
            'main': 'phonemain',
            'home': 'phonehome'
        }
    },

    showHome: function () {
        var me = this;
        me.getMain().setActiveItem(me.getHome());
    }
});
