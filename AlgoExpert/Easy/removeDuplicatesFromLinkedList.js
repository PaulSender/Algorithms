// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
    var node = linkedList
      while (node.next !== null) {
          if(node.value === node.next.value) {
               node.next = node.next.next
          }
          else {
          node = node.next			
          }
      }
      return linkedList
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
  