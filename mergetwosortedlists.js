//Objective is to combine and sort two linked lists.

class Node {
    constructor(data, next = null) { //if next is not given, assume it is empty
      this.data = data
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let l1 = new Node(1)
l1.next = new Node(4)
l1.next.next = new Node(5)

let l2 = new Node(1)
l2.next = new Node(3)
l2.next.next = new Node(4)


//O(n + m) solution that iterates over both lists and compares values.

let newNode = new Node(-1)
let temp = newNode 

while (l1 !== null && l2 !== null) {
    //Compare the two values of the two lists
    if (l1.data <= l2.data) {
        temp.next = l1 
        temp = temp.next 
        l1 = l1.next
    } else {
        temp.next = l2 
        temp = temp.next 
        l2 = l2.next
    }
}

//If one list is exhausted and the other is not, complete the list.
temp.next = l1 == null ? l2 : l1 

return newNode.next