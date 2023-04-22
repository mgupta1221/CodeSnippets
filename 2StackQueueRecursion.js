
//Course - https://frontendmasters.com/courses/data-structures-algorithms/

//Data Structure Solutions
// https://github.com/kuychaco/algoClass/tree/solutions/data-structures

//Recursion
//  https://github.com/kuychaco/algoClass/tree/solutions/recursion



//Stack
// function Stack(maxLimit) {
//     this.items = [];
//     this.currentPosition = 0;
//     this.maxPosition = maxLimit;
// }
// Stack.prototype.Push = function (item) {

//     if (this.currentPosition + 1 == this.maxPosition + 1) {
//         console.log('Stack is full now');
//         return;
//     }
//     this.items[this.currentPosition] = (item);
//     this.currentPosition++;

//     console.log(item + " pushed");
//     // console.log(this.currentPosition);
// }
// Stack.prototype.Pop = function () {
//     if (this.currentPosition == 0) {
//         console.log('Nothing to pop');
//         return;
//     }
//     this.currentPosition--;
//     // console.log(this.currentPosition);
//     console.log('poppped')
// }
// Stack.prototype.GetItems = function () {
//     for (i = 0; i < this.currentPosition; i++) {
//         console.log(this.items[i]);
//     }
// }
// myStack = new Stack(5);
// myStack.Push(5);
// myStack.Push(4);

// //myStack.Pop();
// myStack.Push(3);
// myStack.Push(2);
// myStack.Push(1);
// // myStack.Pop();

// myStack.Push(7); myStack.Push(8);
// myStack.GetItems();
//Stack Ends





// Queue
function Queue(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = [];
    this._head = 0;
    this._tail = 0;
}


Queue.prototype.Enque = function (item) {
    if (this._head == this._tail) {

    }
    this._storage[this._tail] = item;
    this._tail++;
}

Queue.prototype.Deque = function (item) {
    var poppedElement = this._storage[this._head];
    this._head++;
    return poppedElement;
}

Queue.prototype.GetQueue = function (item) {
    for (i = this._head; i < this._tail; i++) {
        console.log(this._storage[i]);
    }
    console.log('---')
}

queue = new Queue(5);
queue.Enque(5);
queue.Enque(4);

queue.Enque(3);
//queue.GetQueue();
//queue.Deque();
//queue.GetQueue(); 
queue.Enque(2);
//queue.Deque();
queue.Enque(1);

//Queue Ends




//Queue implementation with 2 Stacks
// function Queue() {
//     this.Stack1 = [];
//     this.Stack2 = [];
// }
// Queue.prototype.Enqueue = function (element) {
//     this.Stack1.push(element);

// }
// Queue.prototype.Dequeue = function () {
//     while (this.Stack1.length > 1) {
//         this.Stack2.push(this.Stack1.pop());
//     }
//     this.Stack1.pop();
//     while (this.Stack2.length > 0) {
//         this.Stack1.push(this.Stack2.pop());
//     }
// }

// Queue.prototype.print = function () {
//     for (var i = 0; i < this.Stack1.length; i++) {
//         console.log(this.Stack1[i]);
//     }
// }
// var queueObj = new Queue();
// queueObj.Enqueue(1);
// queueObj.Enqueue(3);
// queueObj.Enqueue(5);
// queueObj.Enqueue(7);
// queueObj.Enqueue(9);

// queueObj.print();
// queueObj.Dequeue();
// queueObj.Dequeue();
// queueObj.print();


//Sorting Stack

var Stack = function () {
    this.items = [];
    this.top = 0;
}
Stack.prototype.push = function (element) {
    this.items[this.top] = element;
    this.top++;
}
Stack.prototype.pop = function () {
    if (this.top > -1) {
        var poppedElement = this.items[this.top - 1];
        this.top--;
        return poppedElement;
    }
}
// Stack.prototype.print = function () {
//     for (var i = 0; i < this.top; i++) {
//         console.log(this.items[i])
//     }
// }
// var stack = new Stack();
// stack.push(3);
// stack.push(1);
// stack.push(4);
// stack.push(12);
// stack.push(6);
// stack.push(8);
// stack.print();
// stack.pop();
// stack.pop();
// stack.print();

// //Now Sorting the above stack with recursion
// Stack.prototype.SortStack = function () {
//     if (this.top == 0) {
//         return;
//     }
//     var tempElement = this.pop(); //keep storing the top elmeent in temp variable
//     this.SortStack(); // Recursive call to keep storing top element in temp variable
//     this.PushElement(tempElement); //function to insert all temp element at their correct position, from Stack top's 0 now

// }
// Stack.prototype.PushElement = function (tempElement) {

//     //If stack is empty simply insert the element,
//     //,or, check if element to be inserted is > Stack's top element, if yes then also insert
//     if (this.top == 0 || tempElement > this.items[this.top - 1]) {
//         this.push(tempElement);
//     }

//     else {
//         //If Stack's top element is greater then pop that element 
//         var popElment = this.pop();
//         //and call this function again till we find an element which is smaller than element to be inserted
//         this.PushElement(tempElement);
//         // once reached push the popped elements
//         this.push(popElment);
//     }
// }
// stack.print();
// stack.SortStack();
// stack.print();


// Reversing a Stack now with recursion
// Stack.prototype.ReverseStack = function () {
//     if (this.top > 0) {
//         //pop all elements one by one
//         var temp = this.pop();
//         this.ReverseStack();
//         //aftre all elements are popped, push element at the bottom of the Stack
//         this.pushAtStackBottom(temp);
//     }
// }

// Stack.prototype.pushAtStackBottom = function (temp) {

//     if (this.top == 0) {
//         this.push(temp);
//     }
//     // If top is not at start than keep popping the elements and then push
//     else {
//         var t1 = this.pop();
//         this.pushAtStackBottom(temp);
//         this.push(t1);
//     }

// }
// var stack = new Stack();
// stack.push(3);
// stack.push(1);
// stack.push(4);
// stack.push(12);
// stack.push(6);
// stack.ReverseStack();
// stack.print();






// Reversing a Queue can be done by pushing elements inot a stack and then inserting in the queue


//   Sorting a Queue without extra space
//   https://www.geeksforgeeks.org/sorting-queue-without-extra-space/


///Recursion


//Looping with recursin

// var loopNTimes = function (n) {
//     console.log('n equals' + n);
//     if (n <= 1) {
//         return 'complete!';
//     }
//   return  loopNTimes(n-1);

// }
// //loopNTimes(3); // This will NOT PRINT  'complete' at the end;
// console.log(loopNTimes(3));// This will print complete at the end;



//Factorial
// function Factorial(num) {
//     if (num == 1) {
//         //Base case, stopping condition
//         return 1;
//     }
//     return num * Factorial(num-1);
// }

// var result = Factorial(5);
// console.log(result);



//Fibonacci - print nth fibonacci number
var fib = function (n) {
    if (n <= 1) {
        return  n; // notice we are return 'n' and NOT 1
    }
    else {
        return fib(n - 2) + fib(n - 1);
    }
}




// Reversing a string
// function reverse(str) {
//     //console.log(str.substring(1));
//     if (str.length == 0) {
//        return "";
//     }
//     return reverse(str.substring(1)) + str.charAt(0);
// }
// console.log(reverse('mohit'))



// Reversing an array
// function reverse(arr, start, end) {
//     if (start >= end) {
//         return;
//     }
// //replace first index element with last
//     var c = arr[start];
//     arr[start] = arr[end];
//     arr[end] = c;

//     return reverse(arr, start + 1, end - 1);

// }
// var myArray = [1, 2, 3, 4];
// reverse(myArray, 0, myArray.length-1)
// console.log(myArray);




//Recursion multiplier function
// var RecursionMultiplier = function (arr, num) {

//     if (arr.length == 0) {
//         return;
//     }

//     var last = arr.pop();
//     RecursionMultiplier(arr, num);
//     arr.push(last * num);
//     // return arr;  // optional
// }


// var arr = [1, 2, 3, 4, 5];
// RecursionMultiplier(arr, 5)
// console.log(arr)


///Recursion ends


//Stack Question - Check if string with brackets is balanced
// {[()]}
// {[(])}
// {{[[(())]]}}

// Output
// YES
// NO
// YES

// function isBalanced(s) {
//     var stack = [];
//     for (var i = 0; i < s.length; i++) {
//         if (s[i] == "[" || s[i] == "{" || s[i] == "(") {
//             stack.push(s[i]);
//         }
//         else {

//             if (stack.length != 0 && ((stack[stack.length - 1] == "[" && s[i] == "]") ||
//                 (stack[stack.length - 1] == "{" && s[i] == "}") || (stack[stack.length - 1] == "(" && s[i] == ")")
//             )) {
//                 stack.pop();
//             }
//             else{
//                 return false;
//             }
//         }
//     }
//     if (stack.length > 0) {
//         return false;
//     }
//     else {
//         return true;
//     }
// }

// console.log(isBalanced("{(([])[])[]]}"))

//Time Complexity

// a program to implement Forward button and Back button for browser
//Using Stack or Doubly linked list






