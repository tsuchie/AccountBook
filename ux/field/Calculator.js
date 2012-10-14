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

    initialize: function() {
        var me = this,
            component = me.getComponent();

        me.callParent();

        component.on({
            scope: me,
            masktap: 'onMaskTap'
        });
    },

    onMaskTap: function() {
        if (this.getDisabled()) {
            return false;
        }

        this.onFocus();

        return false;
    },

    onFocus: function(e) {
        var component = this.getComponent();
        this.fireEvent('focus', this, e);

        component.input.dom.blur();

        if (this.getReadOnly()) {
            return false;
        }

        this.isFocused = true;

        this.getCalculator().show();
    },

    getCalculator: function() {
        var calculator = this._calculator,
            value = this.getValue();

        if (calculator && !calculator.isPicker) {
            calculator = Ext.create('Ext.ux.calc.Calculator');

            if (value != null) {
                calculator.setValue(value);
            }
        }

        calculator.on({
            scope: this,
            change: 'onCalcChange',
            hide  : 'onCalcHide'
        });
        Ext.Viewport.add(calculator);
        this._calculator = calculator;

        return calculator;
    },

    onCalcChange: function(calc, newVal, oldVal) {
        this.setValue(newVal);
    }

});

