/// BST questions will just have AlgoExpert code here...

// Take aways: 

// Tree functions can usually be solved and probably should be solved with recurrsion and some sort of serach function. In this case we used a postOrderTraversalSearch
// "Visit" (in this case visit means get the running sum) node, recurrsivly call on the left node, then on the right node

// function branchSums(root) {
// 	var sums = []
// 	postOrderTraversal(root, 0, sums)
// 	return sums
// }
// function postOrderTraversal(node, runningSum, sums) {
// 	if(!node) return 
	
// 	var newRunningSum = runningSum + node.value
// 	// check if at the end
// 	if(!node.left && !node.right) {
// 		sums.push(newRunningSum)
// 		return
// 	}
// 	postOrderTraversal(node.left, newRunningSum, sums)
// 	postOrderTraversal(node.right, newRunningSum, sums)
// }