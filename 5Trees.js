
//Course - https://frontendmasters.com/courses/data-structures-algorithms/


https://github.com/kuychaco/algoClass/blob/solutions/data-structures/tree.js

//1st way to create Tree quickly
// var Node = function (val) {
//     this.value = val;
//     this.left = null;
//     this.right = null;
// }

// Node root = new Node(0);
// root.left = new Node(1);
// root.left.left = new Node(3);
// root.left.left.left = new Node(7);
// root.left.right = new Node(4);
// root.left.right.left = new Node(8);
// root.left.right.right = new Node(9);
// root.right = new Node(2);
// root.right.left = new Node(5);
// root.right.right = new Node(6);
//<--End-->




// 2nd to create tree
// var Tree = function (value) {
//     this.value = value;
//     this.children = [];
// }

// Tree.prototype.addChild = function (value) {
//     var child = new Tree(value);
//     this.children.push(child);
//     return child;
// }

// var tree = new Tree(1);
// var branch1 = tree.addChild(2);
// var branch2 = tree.addChild(3);
// var branch3 = tree.addChild(4);
// branch1.addChild(5);
// branch1.addChild(6);
// branch3.addChild(7).addChild(8);

// console.log(JSON.stringify(tree));
// console.log(JSON.stringify(branch3));

// Tree.prototype.contains = function (value) {
//     //checking node itself first
//     if (value === this.value) return true;
//     //checking childrens
//     for (var i = 0; i < this.children.length; i++) {
//         if (this.children[i].contains(value)) return true;
//     }
//     return false;

// }

// console.log(tree.contains(5))
// console.log(branch3.contains(8))

// var swap = function (arr, item1, item2) {
//     var temp = arr[item1];
//     arr[item1] = arr[item2];
//     arr[item2] = temp;
// }


//Better representaion of a tree below

var Node = function (val) {
    this.data = val;
    this.left = null;
    this.right = null;
}
var BinaryTree = function () {
    this.root = null;
}

BinaryTree.prototype.insert = function (val) {
    var node = new Node(val);

    if (this.root == null) {
        this.root = node;
    }
    else {
        this.insertNode(this.root, node);
    }

}
BinaryTree.prototype.insertNode = function (node, nodeToBeInserted) {
    if (nodeToBeInserted.data < node.data) {
        if (node.left == null) {
            node.left = nodeToBeInserted;
        }
        else {
            this.insertNode(node.left, nodeToBeInserted);
        }
    }

    else {
        if (node.right == null) {
            node.right = nodeToBeInserted;
        }
        else {
            this.insertNode(node.right, nodeToBeInserted);
        }
    }
}

BinaryTree.prototype.delete = function (val) {
    if (this.root.data == val) {


    } else {
        deleteNode(this.root, val)
    }
}

BinaryTree.prototype.deleteNode = function (node, val) {
    if (node === null) {
        return null;

    }
    if (val < this.node.data) {
        this.deleteNode(this.node.left, val);

    } else if (val > this.node.data) {
        this.deleteNode(this.node.right, val);
    }
    else {
        if (node.left == null && node.right == null) {
            node = null;
            return node;
        }
        else if (node.left == null) {
            node = node.right;
            return node;
        }
        else if (node.right == null) {
            node = node.left;
            return node;
        }
        else {
            //find min node in right of the "to be deleted" node and place it at "to be deleted" position
            var aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }
}
BinaryTree.prototype.findMinNode = function (node) {
    if (node.left == null) {
        return node.data;
    }
    else {
        //Notice the return below
        return this.findMinNode(node.left);
    }

}

//Find Cousions solution having 2 funciton findHeightAndParent() and findCousins()

//BFS and DFS Explanation
//https://www.youtube.com/watch?v=pcKY4hjDrxk


BinaryTree.prototype.findHeightAndParent = function (root, parent, nodeValue, height) {
    if (!root) {
        return 0;
    }
    if (root.data == nodeValue) {
        return height;
    }
    // this.xParent is done to pass value by reference back to calling funciton
    this.xParent = root.data;
    this.parent = root.data;
    var leftHeight = this.findHeightAndParent(root.left, this.parent, nodeValue, height + 1);
    if (leftHeight) {
        return leftHeight;
    }
    // Done to pass value by reference back to calling funciton
    this.yParent = root.data;
    parent = root.data;
    var rightHeight = this.findHeightAndParent(root.right, parent, nodeValue, height + 1);
    if (rightHeight) {
        return rightHeight;
    }

}

BinaryTree.prototype.findCousins = function (root, x, y) {
    if (root.data == x || root.data == y) {
        return false;
    }
    this.xParent = -1;
    // notice height as 0 in the last parameter is passed as this call will be recursive
    //.call() is used as we have track back parent here in the calling function becuase function
    // can return only one value at a time and that value is height of X.
    var heightX = this.findHeightAndParent.call(this, root, this.xParent, x, 0);
    var tempxParent = this.xParent;

    this.yParent = -1;
    var heightY = this.findHeightAndParent.call(this, root, this.yParent, y, 0);
    var tempyParent = this.yParent;

    if (tempxParent != tempyParent && heightX == heightY) {
        return true;
    }
    else {
        return false;
    }
}



var myTree = new BinaryTree();
myTree.insert(10);
myTree.insert(5);
myTree.insert(20);
myTree.insert(3);
myTree.insert(6);
myTree.insert(12);
myTree.insert(24);
myTree.insert(7);
myTree.insert(15);
// var minValue = myTree.findMinNode(myTree.root);
// console.log(minValue);

//                    10
//                  5    20
//                3  6  12  24
//                    7   15 

//find if 2 nodes are cousion
//var areCousions = myTree.findCousins(myTree.root, 3, 24);
//console.log(areCousions);


//find the depth of the tree
//https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/
BinaryTree.prototype.findDepth = function (node) {
    if (node == null) {
        return 0;
    }
    var leftHeight = this.findDepth(node.left);
    var rightHeight = this.findDepth(node.right);


    return Math.max(leftHeight, rightHeight) + 1;
    // if (leftHeight > rightHeight) {
    //     return leftHeight + 1;
    // }
    // else {
    //     return rightHeight + 1;
    // }

}
var depthOfTree = myTree.findDepth(myTree.root);
console.log(depthOfTree);

