Ext.define('Ab.service.Accounts', {

    constructor: function (args) {
        this.accounts = args.accounts;
        this.categories = args.categories;
    },


    aggregateByDate: function (date) {
        var me = this,
            days = Ext.Date.getDaysInMonth(date),
            sum = new Array(days),
            condition = function (rec) {
                var d = rec.get('recorded');
                return d.getFullYear() === date.getFullYear() &&
                       d.getMonth() === date.getMonth();
            };

        for (var i = 0; i < days; i++) {
            sum[i] = 0;
        }

        me.accounts.queryBy(condition).each(function (rec) {
            var day = rec.get('recorded').getDate();
            sum[day] += rec.get('account');
        });

        return sum;
    },


    aggregateByCategory: function (date) {
        var me = this,
            sum = {},
            condition = function (rec) {
                var d = rec.get('recorded');
                return d.getFullYear() === date.getFullYear() &&
                       d.getMonth() === date.getMonth();
            };


        me.accounts.queryBy(condition).each(function (rec) {
            var cat = rec.get('category');
            if (!sum[cat]) {
                sum[cat] = 0;
            }
            sum[cat] += rec.get('account');
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

