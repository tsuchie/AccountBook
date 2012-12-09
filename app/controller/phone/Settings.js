Ext.define('Ab.controller.phone.Settings', {
    extend: 'Ab.controller.Settings',

    config: {
        refs: {
            'main': 'phonemain',
            'setting': 'phonesetting'
        }
    },

    showSetting: function () {
        var me = this;
        me.getMain().setActiveItem(me.getSetting());
    }
});

