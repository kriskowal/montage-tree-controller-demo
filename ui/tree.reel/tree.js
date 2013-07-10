
var Component = require("montage/ui/component").Component;

var Observers = require("montage/frb/observers");
var observeProperty = Observers.observeProperty;
var autoCancelPrevious = Observers.autoCancelPrevious;

exports.Tree = Component.specialize({

    constructor: {
        value: function Tree() {
            this.super();
        }
    },

    controller: {
        value: null
    },

    repetition: {
        value: null
    },

    currentIteration: {
        value: null
    },

    contentAtCurrentIteration: {
        value: null
    },

    objectAtCurrentIteration: {
        value: null
    },

    observeProperty: {
        value: function (key, emit, scope) {
            if (
                key === "contentAtCurrentIteration" ||
                key === "objectAtCurrentIteration" ||
                key === "currentIteration"
            ) {
                var self = this;
                return observeProperty(this, "repetition", autoCancelPrevious(function replaceRepetition(repetition) {
                    if (!repetition) return emit();
                    return repetition.observeProperty(key, emit, scope);
                }), scope);
            } else {
                return observeProperty(this, key, emit, scope);
            }
        }
    }

});

