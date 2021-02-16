class Node {
    constructor(name) {
        this.name = name;
        this.children = []
    }

    addChild(name) {
        this.children.push(new Node(name))
        return this
    }
    depthFirstSearch(array) {
        if(!this) return array
        array.push(this.name)
        for (var node of this.children) {
            node.depthFirstSearch(array)
        }
		return array
    }
}
