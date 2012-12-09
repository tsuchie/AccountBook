Ext.define('Ext.ux.field.Calculator', {
    extend: 'Ext.field.Text',
    xtype: 'calculatorfield',

    requires: ['Ext.ux.calc.Calculator'],

    config: {
        calculator: true,
        component: {
            useMask: true
        }
    },

    initialize: function () {
        var me = this,
            component = me.getComponent();

        me.callParent();
        component.on({
            scope: me,
            masktap: 'onMaskTap'
        });
    },

    onMaskTap: function () {
        var me = this;
        if (me.getDisabled()) {
            return false;
        }
        me.onFocus();
        return false;
    },

    onFocus: function (e) {
        var me = this,
            component = me.getComponent();

        me.fireEvent('focus', me, e);
        component.input.dom.blur();
        if (me.getReadOnly()) {
            return false;
        }
        me.isFocused = true;
        me.getCalculator().show();
    },

    getCalculator: function () {
        var me = this,
            calculator = me._calculator,
            value = me.getValue();

        if (calculator && !calculator.isPicker) {
            calculator = Ext.create('Ext.ux.calc.Calculator');
            if (value !== null) {
                calculator.setValue(value);
            }
        }

        calculator.on({
            scope: me,
            change: 'onCalcChange'
        });
        Ext.Viewport.add(calculator);
        me._calculator = calculator;

        return calculator;
    },

    onCalcChange: function(calc, newVal, oldVal) {
        this.setValue(newVal);
    }

});

