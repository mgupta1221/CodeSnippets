//https://www.geeksforgeeks.org/must-coding-questions-company-wise/#google

//problem 1: Subarray with given sum
//https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1
//https://www.geeksforgeeks.org/find-subarray-with-given-sum/


//brute force solution
function findSubArray1(array, sum) {
    for (let i = 0; i < array.length; i++) {
        var total = 0;
        for (let j = i; j < array.length; j++) {
            total += array[j];
            if (total > sum)
                break;
            if (total === sum) {
                console.log(i + ' till ' + j)
            }

        }
    }
}


//Below  soultion will only work when all elements are positive
function findSubArray2(array, sum) {
    var curr_sum = 0;
    var start = 0;
    for (let i = 0; i < array.length; i++) {
        // If curr_sum exceeds the sum,
        // then start removing elements from start
        while (curr_sum > sum) {
            curr_sum -= array[start];
            start++;
        }
        // If curr_sum becomes equal to sum,
        // then return true
        if (curr_sum == sum) {
            console.log(start + " till " + (i - 1));
        }

        // Add current element to curr_sum
        curr_sum += array[i];
    }
}


var arr = [1, 4, 1, 3, 10, 5];
//findSubArray2(arr, 33);



//Problem 2: Maximum Index
//Problem: https://practice.geeksforgeeks.org/problems/maximum-index-1587115620/1
//   https://www.geeksforgeeks.org/given-an-array-arr-find-the-maximum-j-i-such-that-arrj-arri/

//Solution 1
function findMaxIndex(arr) {
    var highest_J_Minus_I_Value = -1;
    var n = arr.length;
    for (let i = 0; i < arr.length; i++) {
        //Notice we start inner from right to find the highest value of j with max difference.       
        for (j = n - 1; j > i; --j) {
            if (arr[j] > arr[i] && highest_J_Minus_I_Value < (j - i))
                highest_J_Minus_I_Value = j - i;
        }


    }
    console.log(highest_J_Minus_I_Value);
}
var arr = [34, 8, 10, 3, 2, 80, 30, 33, 1];
//findMaxIndex(arr); //Complexity O(n2)



//Solution 2
//Here we sort the array and maintain their indexes, once the array is sorted than we are sure right lement is
// greater  than the left element so the only thing to work on is to find the differnece of index
// Explanation: https://www.youtube.com/watch?v=rdRP0O_G3Qo
function findMaxIndex2(arr) {
    console.log(arr);
    var n = arr.length;
    var hashmap = {};
    // Iterate from 0 to n - 1
    for (let i = 0; i < n; i++) {
        if (arr[i] in hashmap) {
            hashmap[arr[i]].push(i);
        }
        else {
            hashmap[arr[i]] = [i];
        }
    }
    //var arr2 = arr.sort((a, b) => a - b); //sorting the array
    console.log(JSON.stringify(hashmap));

    var minIndex = n;
    var maxDist = 0;

    for (var prop in hashmap) {
        minIndex = Math.min(minIndex, hashmap[prop][0]); //Maintaing min Index value all the time
        maxDist = Math.max(maxDist, hashmap[prop][0] - minIndex);
    }
    return maxDist;

}
var arr = [34, 8, 10, 3, 2, 80, 30, 33, 1];
arr = [70, 83, 82, 39, 81];
arr = [30, 87, 24, 54, 51, 54, 94, 58, 54]
//arr=[3,5,4,2]
//arr=[2,3,4,5]
//var result_maxDiff = findMaxIndex2(arr); //Complexity O(n)
//console.log(result_maxDiff);






//Problem 3: Non Repeating Numbers
//Problem: https://www.geeksforgeeks.org/find-two-non-repeating-elements-in-an-array-of-repeating-elements/ 
//See Explnation in XOR notes




//Problem 4 :Longest valid Parentheses
// https://www.geeksforgeeks.org/length-of-the-longest-valid-substring/
//Solution Explnation
//https://www.youtube.com/watch?v=qC5DGX0CPFA&t=602s

function logestParenthese(str) {
    var charStack = [];
    var indexStack = [-1];  //initialize index array with -1
    var items = str.split('');
    var openBraces = 0;
    var count = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i] == '(') {
            indexStack.push(i);
            charStack.push('(')  // to solve this charStack is actally not required by used for illustration
        }
        if (items[i] == ')') {
            if (charStack[charStack.length - 1] == '(') {
                charStack.pop();   //popping '('
                indexStack.pop();  //popping '(' ka index
                count = Math.max(count, i - indexStack[indexStack.length - 1]);// Current Index - last value of IndexStack

            }
            else {
                indexStack.push(i);  // this is index of latest '(' whose ')' was not. This index
                //is substrcted from current index everytime to calculate 'count' above
            }
            //openBraces--;
        }
    }
    console.log('maximum =' + count);
}

//logestParenthese('((()'); //2
//logestParenthese(')()())');//4
//logestParenthese('()(()'); //2
logestParenthese('()(()');//6


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Problem 5: Jumping number
//  https://www.geeksforgeeks.org/print-all-jumping-numbers-smaller-than-or-equal-to-a-given-value/

//Solution 1: BruteForce solution

function isJumpingNumber(k) {
    let isJumpingNumber = true;
    //Below we are getting all digits of the number into an array
    var digits = k.toString().split('').map(element => {
        return +element;
    });;


    for (let i = 0; i < digits.length - 1; i++) {
        if (!(Math.abs(digits[i] - digits[i + 1]) === 1)) {
            isJumpingNumber = false;
            break;
        }
    }
    return isJumpingNumber;
}

function driverCodeForJumpingNumber(n) {
    while (n > 0) {
        if (isJumpingNumber(n)) {
            return n;
        }
        else {
            n--;
        }
    }
}

//console.log(driverCodeForJumpingNumber(11));


//Solution 2: Efficient Solution below- this solution uses BFS alogorithm and it is efficient becuase we only traverse the numbers
//which are Jumping number , we do not traverse all numbers from 1 to n

// https://www.youtube.com/watch?v=5lFiDUmTtCM

function jumpingNumber(num, i) {
    queue = [];
    queue.push(i);
    while (queue.length > 0) {
        var item = queue[0]  //Get top item from queue

        queue.shift(); //removing first element
        if (item < num) {  // Only do below calcualtion if item is less than the given 'num', becuase
            // we have to find numbers less than given 'num'.

            console.log(item);//keep printing the numbers as result  

            var last_digit = item % 10;
            if (last_digit == 0) {// say num is 10 so last_digit is 0, so next element to be pushed will be 101
                queue.push(item * 10 + last_digit + 1)
            }

            else if (last_digit == 9) {// say num is 19 so last_digit is 9, so next element to be pushed will be 198
                queue.push(item * 10 + last_digit - 1)
            }
            else {// say num is 28 so last_digit is 8, so next element to be pushed will be  287 or 289
                queue.push(item * 10 + last_digit - 1);
                queue.push(item * 10 + last_digit + 1);
            }
        }
    }
}

function driverCodeForJumpingNumberWithBFS(n) {
    //1 to 9 are jumping numbers. We start with these numbers and find all jumping numbers starting with them
    // and only numbers which are less than given number n

    for (let i = 1; i < 10 && i < n; i++) {
        jumpingNumber(n, i);
    }
}
//driverCodeForJumpingNumberWithBFS(10067);










//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//Problem 6:Count BST nodes that lie in a given range
//https://www.geeksforgeeks.org/count-bst-nodes-that-are-in-a-given-range/
//https://practice.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1

function getCount(root, low, high) {

    if (!root) return 0;

    if (root.data >= low && root.data <= high) {
        return 1 + this.getCount(root.left, low, high) + this.getCount(root.high, low, high);
    }
    if (root.data > low) { this.getCount(root.left, low, high) }
    if (root.data < low) { this.getCount(root.right, low, high) }
}






//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Problem 7:Interleaved Strings
// https://www.geeksforgeeks.org/find-if-a-string-is-interleaved-of-two-other-strings-dp-33/
//  https://practice.geeksforgeeks.org/problems/interleaved-strings/1

function isInterleave(A, B, C) {

    if (A.length == 0 && B.length == 0 && C.length == 0) {
        return true;
    }

    if (C.length == 0) {
        return false;
    }


    return (C[0] == A[0] && isInterleave(A.slice(1), B, C.slice(1))) ||
        (C[0] == B[0] && isInterleave(A, B.slice(1), C.slice(1)));
}

//console.log(isInterleave("abb", "axy", "aaxaby"));






//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Problem 8: Find triplets with Zero sum
//https://www.geeksforgeeks.org/find-triplets-array-whose-sum-equal-zero/
// https://practice.geeksforgeeks.org/problems/find-triplets-with-zero-sum/1


function findTriplets(arr) {
    //The idea is, we will run 2 loops
    //say 3,5,-8 are array items, if we take negative sum of 3,5, it becomes -8, here we will store jth element
    //which is 5 in hashmap, so that if later we found -8 element during traversal and we take negative sum 
    //of 3(element at i) and -8 (current j), we will look for negative sum of these 2 whih is -(3-8) that is 5
    //which already exist in hashmap
    //and we have found the triplet
    var found = false;

    for (let i = 0; i < arr.length - 1; i++) {
        var hashmap = {};  //notice we define it inside first for loop
        for (let j = i + 1; j < arr.length; j++) {

            var negativeSum = -(arr[i] + arr[j]);

            if (hashmap[negativeSum]) {
                console.log(negativeSum, arr[i], arr[j]);
                found = true;
            }
            else {
                hashmap[arr[j]] = 1
            }
        }
    }
    if (found == false) {
        console.log('not found')
    }
}
var arr = [63, 30, 4, 13, 85, -6, 11]
//console.log(findTriplets(arr));





//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




//Problem 9: Egg Dropping Puzzle 
// https://www.geeksforgeeks.org/egg-dropping-puzzle-dp-11/
// https://practice.geeksforgeeks.org/problems/egg-dropping-puzzle-1587115620/1

function eggDrop(n, k) {
    //Check video in geeksforgeeks website fir this problem

}


//eggDrop(10, 2);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





//Problem 10: Word Break Problem
// https://www.geeksforgeeks.org/word-break-problem-dp-32/
// https://practice.geeksforgeeks.org/problems/word-break1352/1 

function HelperTofindIfStringPresentinDict(str, Dict) {
    if (Dict.indexOf(str) > -1) {
        return 1;
    }
}

var dp = [];

function wordBreak(str, Dict) {
    //Base condition
    if (str.length == 0) {
        return 1;
    }
    if (dp[str]) {
        return dp[str];
    }

    for (let i = 1; i < str.length; i++) {
        var tempResult = 0;
        var subStr = str.substr(0, i);
        console.log(str.substr(0, i), str.substr(i, str.length));
        if (HelperTofindIfStringPresentinDict(subStr, Dict) == 1) {
            tempResult = 1;
        }
        if (tempResult == 1 && wordBreak(str.substr(i, str.length), Dict) == 1) {
            return dp[str] = 1;
        }
    }
    return dp[str] = -1;
}
console.log(dp)
// var Dict = ["mobile", "samsung", "sam", "sung",
//     "man", "mango", "icecream", "and",
//     "go", "i", "like", "ice", "cream"];

//console.log(wordBreak("ilikesamsung", Dict));

//var Dict = ['a', "abc", "bcd", "cd", "d", "de"];
//console.log(wordBreak("abcd", Dict));

var Dict = ['korea', "godrej", "god", "rej", "i", "de", "love"];


console.log(wordBreak("godrejlovei", Dict));




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


