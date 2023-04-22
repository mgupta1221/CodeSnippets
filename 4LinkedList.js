
//Course - https://frontendmasters.com/courses/data-structures-algorithms/


https://github.com/kuychaco/algoClass/blob/solutions/data-structures/linkedList.js

function Node(data) {
    this.data = data;
    this.next = null;
}

var LinkedList = function (value) {
    if (value === undefined) {
        console.log('Value should not be null')
    }
    else {
        this.head = new Node(value);
        this.tail = this.head;
    }
}
LinkedList.prototype.print = function () {
    var head = this.head;
    var result = [];
    while (head) {
        result.push(head.data);
        head = head.next;
    }
    console.log(result.join(', '));
}

LinkedList.prototype.insertAfter = function (node, value) {
    var oldNext = node.next;
    var newNode = new Node(value);
    node.next = newNode;
    newNode.next = oldNext;

    if (node == this.tail) {
        this.tail = newNode;
    }
}

LinkedList.prototype.removeAfter = function (node, value) {
    if (node.next === undefined) {
        return;
    }
    var oldNext = node.next;
    var newNext = oldNext.next;
    node.next = newNext;

    if (node.next == this.tail) {
        this.tail = node;
    }
}

var myList = new LinkedList(2);
//console.log(myList.print(), 'should be 0');
//console.log(myList.insertAfter(myList.head, 1), 'should be 1');
//console.log(myList.print(), 'should be 0, 1');
//console.log(myList.insertAfter(myList.head.next, 3), 'should be 3');
//console.log(myList.print(), 'should be 0, 1, 3');
//console.log(myList.insertAfter(myList.head.next, 2), 'should be 2');
//console.log(myList.print(), 'should be 0, 1, 2, 3');
//console.log(myList.removeAfter(myList.head), 'should be 1');
//console.log(myList.print(), 'should be 0, 2, 3');
//console.log(myList.removeAfter(myList.head.next), 'should be 1');
//console.log(myList.print(), 'should be 0, 2');
myList.insertAfter(myList.head, 11);
myList.insertAfter(myList.head.next, 5);
myList.insertAfter(myList.head.next.next, 12);
myList.insertAfter(myList.head.next.next.next, 4);

myList.print();


// Removing middle node - Slower version
// LinkedList.prototype.removeMiddleNode = function () {
//     //console.log(this.head.data);
//     var node = this.head;
//     var count = 0;
//     //Getting total Count of nodes
//     while (node != null) {
//         count++;
//         node = node.next;
//     }
//     node = this.head;
//     // finding middle index of the node
//     var middleIndex = Math.floor(count / 2);
//     counter = 0;
//     //Reaching the middle Node
//     while (middleIndex != counter + 1) {
//         node = node.next;
//         counter++;
//     }
//     var deletedNode= node.next;
//     node.next= deletedNode.next;   

// }

// myList.removeMiddleNode();
// myList.print();






// Removing middle node - Faster version - This approach can also be used when checking if Linked list is Circular
//Here we have 2 pointers - Fastpointer wil run 2 times faster than slowPointer
// LinkedList.prototype.removeMiddleNodeFaster = function () {
//     //console.log(this.head.data);

//     var slowPointer = this.head;
//     var fastPointer = this.head;
//     var prev; // To store previous of slow_ptr 

//     while (fastPointer != null && fastPointer.next != null) {
//         fastPointer = fastPointer.next.next;

//         prev = slowPointer;
//         slowPointer = slowPointer.next;
//     }

//     var deletedNode = prev.next;
//     prev.next = deletedNode.next;

// }

// myList.removeMiddleNodeFaster();
// myList.print();





//How to delete a node when the pointer to this node is only given and condition is you do not have access 
//to the head of Linked list
// LinkedList.prototype.DeleteNodeWithoutAccessToHead = function (node) {
//     if (node == null) {
//         return;
//     }
//     else {
//         var nextNode = node.next;
//         node.data = nextNode.data;
//         node.next = nextNode.next;
//     }

// }
// //console.log(myList.head.next.next.data)

// //Deleting Node with value 4 assuiming we do not have access to head
// myList.DeleteNodeWithoutAccessToHead(myList.head.next.next);
// myList.print();







//Reverse a linked list - Only Printing in reverse below
// LinkedList.prototype.ReverseLinkedList = function (node) {
//     if (node == null) {
//         return;
//     }
//     else {
//         this.ReverseLinkedList(node.next);
//         console.log(node.data);
//     }

// }
// myList.ReverseLinkedList(myList.head);





// //Reverse a linked list - Actually reversing the linked list
// LinkedList.prototype.ReverseLinkedList = function (head) {
//     let currentNode = head;
//     let previousNode = null;
//     let nextNode = null;
//     while (currentNode) {
//         nextNode = currentNode.next;
//         currentNode.next = previousNode;
//         previousNode = currentNode;
//         currentNode = nextNode;
//     }

//     this.head = previousNode;

// }
// myList.ReverseLinkedList(myList.head);
// myList.print()




//Detect a loop in linked list - Either use hastable or use Floyd -cycle finding method by having 2 pointers
// Move first pointer by 1 node and second by 2 node if they meet then there is a cycle.
// LinkedList.prototype.DetectLoopInList = function (head) {
//     let p1 = head;
//     let p2 = head;
//     while (p2.next.next) {
//         p1 = p1.next;
//         p2 = p2.next.next;    
//         if (p1 == p2) {
//           return true;
//         }
//       }
//       return false;

// }
// myList.DetectLoopInList(myList.head);
// myList.print();






//Find Kth node from the last Node
// k - positive integer that counts from the end of a linked list to a node.

// Solution 1: Counting solution
function kthToLastNode(k, head) {
    let length = 1;
    let currNode = head;

    // get count all the nodes
    while (currNode.next) {
        currNode = currNode.next;
        length += 1;
    }

    const distance = length - k;

    currNode = head;
    for (let i = 0; i < distance; i++) {
        currNode = currNode.next;
    }

    return currNode;
}


// Solution 2: Recursion - NOT WORKING

// LinkedList.prototype.FindKthNodeFromlastNode = function (head, k, nthNode) {
//     var counter=0;
//     var node = head;
//     if (node == null) {

//         return;
//     }
//     node = node.next;
//     //Recursive call
//     this.FindKthNodeFromlastNode(node, k, nthNode)
//     counter = counter + 1;
//     if (counter === k) {
//         //Printing the solution, rather than returning the value
//         console.log(node.data);
//         nthNode = node;
//     }
//     //counter = counter + 1;
// }

//var kthNode = myList.FindKthNodeFromlastNode(myList.head, 3, null);
//console.log(kthNode);






// partition the linked list with value x  such that all values less than are placed towards left of the list and
//greater than x should be placed towards right of x

//Another way to create Linked list
// var LinkedList2 = function () {
//     this.head = null;
//     this.tail = null;
// };
// LinkedList2.prototype.makeNode = function (val) {
//     var node = {};
//     node.val = val;
//     node.next = null;
//     return node;
// };
// LinkedList2.prototype.addToTail = function (value) {
//     var newTail = this.makeNode(value);

//     if (!this.head) {
//         this.head = newTail;
//     }
//     if (this.tail) {
//         this.tail.next = newTail;
//     }
//     this.tail = newTail;
// };
// LinkedList.prototype.partition = function (x) {
//     var node = head;
//     var greaterThan = new LinkedList2();
//     var lessThan = new LinkedList2();
//     var iterator = this.head;
//     while (iterator) {
//         let nextNode = node.next;
//         node.next = null;

//         if (node.data > x) {
//             greaterThan.addToTail(node);

//         } else if (node.data < x) {
//             lessThan.addToTail(node);
//         }
//         iterator = iterator.next;

//     }

//     greaterThan.print();
//     lessThan.print();
//     var partitionNode = new Node(x);
//     lessThan.next = partitionNode;
//     partitionNode.next = greaterThan;
// }

// //myList.partition(myList.head, 5)
// console.log(JSON.stringify(myList.partition(myList.head, 5)))
//myList.print();





//Find intersection of 2 linked list
//https://www.geeksforgeeks.org/write-a-function-to-get-the-intersection-point-of-two-linked-lists/

