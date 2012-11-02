Ext.define('Ab.profile.Tablet', {
    extend: 'Ext.app.Profile',

    //define any additional classes your Profile needs here
    config: {
        views: ['Main'],
        models: [],
        stores: [],
        controllers: ['Accounts']
    },

    //this profile will be activated if we detect we're running on a Tablet
    isActive: function (app) {
        var vp = Ext.Viewport;
        //TODO Is the criteria size adequacy?
        return vp.getWindowWidth() * vp.getWindowHeight() > 640 * 960;
    },

    launch: function () {
        console.log('tablet launch');
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Ab.view.tablet.Main'));
    }

});
