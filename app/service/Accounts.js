Ext.define('Ab.service.Accounts', {

    constructor: function (args) {
        this.accounts = args.accounts;
        this.categories = args.categories;
    },


    aggregateByCategories: function (conditions) {
        var me = this,
            sum = {};

        conditions = conditions || function () {
            return true;
        };

        me.accounts.queryBy(conditions).each(function (rec) {
            var cat = rec.get('category');
            if (!sum[cat]) {
                sum[cat] = 0;
            }
            sum[cat] += parseFloat(rec.get('account'));
        });

        var rv = [];
        me.categories.each(function (cat) {
            var id = cat.get('value');
            rv.push({
                category: cat.get('text'),
                account: sum[id] || 0,
                color: cat.get('color')
            });
        });

        return rv;
    }

});

