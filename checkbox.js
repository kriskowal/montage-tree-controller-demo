
var AbstractCheckbox = require("montage/ui/base/abstract-checkbox").AbstractCheckbox;

exports.Checkbox = AbstractCheckbox.specialize({

    hasTemplate: {value: false},

    checked: {
        get: function () {
            return this._checked;
        },
        set: function (checked) {
            if (checked === this._checked)
                return;
            this._checked = checked;
            this.needsDraw = true;
            this.dispatchOwnPropertyChange("checked", checked);
        }
    },

    enabled: {
        get: function () {
            return this._enabled;
        },
        set: function (enabled) {
            if (enabled === this._enabled)
                return;
            this._enabled = enabled;
            this.needsDraw = true;
            this.dispatchOwnPropertyChange("enabled", enabled);
        }
    },

    draw: {
        value: function () {
            this.super();
            this.element.checked = this._checked;
            this.element.disabled = !this.enabled;
        }
    },

    enterDocument: {
        value: function(firstTime) {
            if (firstTime) {
                this._element.addEventListener("change", this);
            }
        }
    },

    handleChange: {
        enumerable: false,
        value: function(event) {
            Object.getPropertyDescriptor(this, "checked").set.call(this,
                this.element.checked, true);
            this._dispatchActionEvent();
        }
    }

});

