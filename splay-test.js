
var Component = require("montage/ui/component").Component;
var SortedSet = require("montage/collections/sorted-set");

exports.SplayTest = Component.specialize({

    ascii: {
        value: {
            final: " ^-",
            medial: " +-",
            before: " | ",
            beyond: "   "
        }
    },

    constructor: {
        value: function SplayTest() {
            this.super();
            this.set = SortedSet([5, 6, 4, 2, 4, 6, 1, 4, 6, 2, 3]);
        }
    },

    handleSplayButtonAction: {
        value: function (event) {
            var node = event.target.node;
            console.log("splay", node.value);
            this.set.splay(node.value);
        }
    }

});

