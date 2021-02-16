// Write a function that takes in a BST and a target integer value and returns the closest value to that target value contained in that BST

// You can assume that there will only be one closest value

// Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strickly greater than the vlaues
// of every node to its left; its value is less than or rqual to the values of every node to its right; and its children nodes are either valiud bst nodes themselves or None/null.

// I guess this doesn't work in the algo expert promt window because the "tree" input is actually a node ...

// ******** Working code for this set up *****
// var t = tree.tree
// if (t.root === target) return t.root
// var closest = t.root
// var curDiff = Math.abs(t.root - target)
// for (var cur of tree.tree.nodes) {
//     if (Math.abs(cur.value - target) < curDiff) {
//         closest = cur
//     }
// }
// return closest

// *********Working Code for AlgoExpert test cases *************

function findClosestValueInBst(tree, target) {
    // tree.root > or < or = target, if target return target, if not check either the right of left nodes.
    var current = tree
	if(current.value === target) {
		return current.value
	}
	var closest = current
	var curDiff = Math.abs(current.value - target)
	while(current !== null) {
		if(Math.abs(current.value - target) < curDiff) {
			closest = current
			curDiff = Math.abs(current.value - target)
		}
		current = current[current.value > target ? "left" : "right"]
	}
	return closest.value
}

// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

var example = {
    "tree": {
        "nodes": [
            { "id": "10", "left": "5", "right": "15", "value": 10 },
            { "id": "15", "left": "13", "right": "22", "value": 15 },
            { "id": "22", "left": null, "right": null, "value": 22 },
            { "id": "13", "left": null, "right": "14", "value": 13 },
            { "id": "14", "left": null, "right": null, "value": 14 },
            { "id": "5", "left": "2", "right": "5-2", "value": 5 },
            { "id": "5-2", "left": null, "right": null, "value": 5 },
            { "id": "2", "left": "1", "right": null, "value": 2 },
            { "id": "1", "left": null, "right": null, "value": 1 }
        ],
        "root": "10"
    }
}

console.log(findClosestValueInBst(example, 12))