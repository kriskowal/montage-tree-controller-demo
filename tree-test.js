
var Montage = require("montage").Montage;
var Component = require("montage/ui/component").Component;

function Node(label, children) {
    this.label = label;
    this.children = children || [];
}

exports.TreeTest = Component.specialize({

    ascii: {
        value: {
            final: " ^-",
            medial: " +-",
            before: " | ",
            beyond: "   "
        }
    },

    constructor: {
        value: function TreeTest() {
            this.super();
            this.content = new Node("A");
            this.content.children = [
                new Node("B"),
                new Node("C")
            ];
            this.otherContent = new Node();
        }
    },

    handleAddChildButtonAction: {
        value: function (event) {
            var node = event.target.node;
            node.expanded = true;
            node.content.children.push(new Node(""));
            console.log(JSON.stringify(this.content, null, 2));
        }
    },

    handleRemoveNodeButtonAction: {
        value: function (event) {
            var node = event.target.node;
            if (!node.parent)
                return;
            node.parent.content.children.delete(node.content);
            console.log(JSON.stringify(this.content, null, 2));
        }
    },

    handleSwapButtonAction: {
        value: function (event) {
            var swap = this.content;
            this.content = this.otherContent;
            this.otherContent = swap;
        }
    }

});

var Operators = require("montage/frb/operators");
exports.StringConverter = Montage.specialize({
    convert: {value: Operators.string},
    revert: {value: Operators.string}
});

