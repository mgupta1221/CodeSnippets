
//Course - https://frontendmasters.com/courses/data-structures-algorithms/


https://github.com/kuychaco/algoClass/blob/solutions/data-structures/binarySearchTree.js

//With the below approach of definign tree, you will not get access to root
var BST = function (value) {
    this.value = value; //root
    this.left = null;
    this.right = null;
}

BST.prototype.add = function (value) {
    var child = new BST(value);

    if (value > this.value) {
        if (this.right == undefined) {
            this.right = child;
        }
        else {
            this.right.add(value); //notice addition is on right of tree
        }
    }
    else {
        if (this.left == undefined) {
            this.left = child;
        }
        else {
            this.left.add(value)
        }
    }
    return this;
}

BST.prototype.contains = function (value) {

    if (this.value == value) return true;
    if (value < this.value) {
        return !!this.left && this.left.contains(value)
    }
    else {
        return !!this.right && this.right.contains(value)
    }
    return false;
}


var tree = new BST(10);
// var branch1 = tree.add(6);
// var branch2 = tree.add(7);
// var branch3 = tree.add(15);
// var branch3 = tree.add(18);
// var branch3 = tree.add(5);

var branch3 = tree.add(15);
var branch3 = tree.add(80);
var branch3 = tree.add(35);



console.log(tree.contains(15));
console.log(tree.contains(18));

BST.prototype.InOrderTraversal = function (root) {

    if (root !== undefined) {
        if (root.left != undefined) this.InOrderTraversal(root.left)
        console.log(root.value)
        if (root.right != undefined) this.InOrderTraversal(root.right)
    }

}
BST.prototype.PreOrderTraversal = function (root) {

    if (root !== undefined) {
        console.log(root.value)
        if (root.left != undefined) this.PreOrderTraversal(root.left);
        if (root.right != undefined) this.PreOrderTraversal(root.right);
    }

}
BST.prototype.PostOrderTraversal = function (root) {

    if (root !== undefined) {
        if (root.left != undefined) this.PostOrderTraversal(root.left);
        if (root.right != undefined) this.PostOrderTraversal(root.right);
        console.log(root.value)
    }

}
console.log('** In Order Traversal **');
tree.InOrderTraversal(tree);
//console.log('** Pre Order Traversal **');
//tree.PreOrderTraversal(tree);
//console.log('** Post Order Traversal **');
//tree.PostOrderTraversal(tree);

var DeleteMin = function (tree) {
    if (tree.left == undefined && tree.right == undefined) {
        tree.value = null;
    }
    else {
        var item = tree;
        var parent = tree;
        while (item.left) {
            parent = item;
            item = item.left;
        }
        if (item.right) {
            parent.left = item.right;
        }
        else {
            parent.left = null;
        }
    }
}

BST.prototype.DeleteMinWithRecursion = function (parent) {
    if (tree.left == undefined && tree.right == undefined) {
        tree.value = null;
        if (parent == null) {
            this.value = null;
            return;
        }
    }
    
    if (this.left) {
        this.left.DeleteMinWithRecursion(this)
    }
    else if (!this.left && this.right) {
        parent.left = this.right;
    }
    else {
        parent.left = null;
    }
}

//DeleteMin(tree);
tree.DeleteMinWithRecursion(null);

console.log('** After deleting Min **');
tree.InOrderTraversal(tree);