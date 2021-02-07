/*
    Given a sorted (increaing order) array with unique interger elements, write an algorithm to crete a binary search tree with minimal height
*/

// [1, 2, 4, 6, 10, 55]
/* What we know:
 BNS must mean the left branches are less than the current node and the right branches are greater than the current node.
     - could mean the "middle" element of the array is the root
     - we want to balance the tree in order to keep the height minimal
     - need a node class
     - might be useful to have a tree class
     - should create functions to help. i.e. balancing, traverse, etc.
*/

// Node class (function)

function Node(data) {
    this.data = data
    this.left = null
    this.right = null
}

function insertNode(tree, node) {
    var root = tree.root
    if(root === null) {
        tree.root = node
        return tree
    }
    if(root.data < node.data) {
        tree.root = node
        tree.root.left = root
    }

    return tree
}

// @param {number[]} array
// @return {number{}} tree
function arrayToMinimalTree(array) {
    var tree = {root: null}
    for(var i = 0; i < array.length; i++) {
        insertNode(tree, new Node(array[i]))
    }
    return tree
}
var example = [1, 2, 4, 6, 10, 55]
console.log(arrayToMinimalTree(example))


// Needed to look up
/*
    - How to create a node class
    - insert Node parameters
*/