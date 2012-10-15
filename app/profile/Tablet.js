Ext.define('Ab.profile.Tablet', {
    extend: 'Ext.app.Profile',

    //define any additional classes your Profile needs here
    config: {
        views: [],
        models: [],
        stores: [],
        controllers: []
    },

    //this profile will be activated if we detect we're running on a Tablet
    isActive: function (app) {
        return Ext.os.is.Tablet;
    },

    launch: function () {
        console.log('tablet launch');
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Ab.view.tablet.Main'));
    }

});
