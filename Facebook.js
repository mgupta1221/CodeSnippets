

//Problem 1
//Find all valid words
//https://www.facebook.com/watch/?t=41&v=10152735777427200
var GetValidNearByWords = function (str) {
    var letters = str.split("");
    var permutations = GetAllPermutations(letters, 0)
    var validWords = GetValidWords(permutations);
    console.log(validWords);

}
//GetValidNearByWords("gi");
//Solution 1 for getting permutations
function getPermutations(string) {
    var results = [];

    if (string.length === 1) 
    {
      results.push(string);
      return results;
    }

    for (var i = 0; i < string.length; i++) 
    {
      var firstChar = string[i];
      var otherChar = string.substring(0, i) + string.substring(i + 1);
      var otherPermutations = getPermutations(otherChar);

      for (var j = 0; j < otherPermutations.length; j++) {
        results.push(firstChar + otherPermutations[j]);
      }
    }
    return results;
  }

var myString = "1234";
permutations = getPermutations(myString);
console.log(JSON.stringify(permutations));



//Solution 2 for getting permutations
/// Easier way to get anagrams permutations within a astring, aftre this there is improved implementation 
//of this which does not use Global variable

// //https://www.youtube.com/watch?v=TQaIiNJIaYg
// var results = [];
// function getPermutations2(string, anagram) {

//     if (!string) {
//         results.push(anagram);
//         return;
//     }

//     for (var i = 0; i < string.length; i++) {
//         anagram += string[i]; // adding charctrs to the string, this is a string not an array
//         var otherChar = string.substring(0, i) + string.substring(i + 1);
//         getPermutations2(otherChar, anagram);
//         anagram = anagram.slice(0, anagram.length - 1)
//     }

// }

// var myString = "1234";
// getPermutations2(myString, "");
//  console.log(JSON.stringify(results));
//Time Complexity: O(n*n!)



//Improved Solution 2 for getting permutations without global variable
// //Implementation removing global varibale 'results', notice it is initialized with empty arrray in the paraemter
// // same is with analram variable, so extra parameter is removed in the function call
// function getPermutations2(string, anagram = '', results = []) {

//     if (!string) {
//         results.push(anagram);
//         return;
//     }

//     for (var i = 0; i < string.length; i++) {
//         anagram += string[i];
//         var otherChar = string.substring(0, i) + string.substring(i + 1);
//         getPermutations2(otherChar, anagram, results);
//         anagram = anagram.slice(0, anagram.length - 1)
//     }
//     return [...new Set(results)];
// }

// var myString = "7890";
// permutations = getPermutations2(myString);
// console.log(JSON.stringify(permutations));






//Problem 2
//Find longest increasing subsequence - Dynamic Programming
// With this same logic MaxSum in subsequnce cn also be found
//https://www.youtube.com/watch?v=CE2b_-XfVDk
// var findLongestSubSequence = function (arr) {
//     var len = arr.length;
//     var tempArr = [];

//     for (var u = 0; u < arr.length; u++) {
//         tempArr[u] = 1;
//     }

//     for (var i = 1; i < arr.length; i++) {
//         for (var j = 0; j <= i; j++) {
//             if (arr[i] > arr[j]) {
//                 if (tempArr[i] < tempArr[j] + 1)
//                     tempArr[i] = tempArr[j] + 1;
//             }
//         }
//     }
//     var max = 0;
//     for (var k = 0; k < tempArr.length; k++) {
//         if (tempArr[k] > max) {
//             max = tempArr[k];
//         }
//     }
//     console.log(tempArr.join(','))
//     console.log(max);
// }
// findLongestSubSequence([3, 4, -1, 0, 6, 2, 3])



//Problem 3
//Unique Paths in a Grid
//Given a grid of size m * n, lets assume you are starting at (1,1) and your goal is to reach (m,n). 
//At any instance, if you are on (x,y), you can either go to (x, y + 1) or (x + 1, y).
//https://www.interviewbit.com/problems/unique-paths-in-a-grid/

var getUniquePaths = function (arr, x, y) {
    if (x >= arr.length || y >= arr.length) {
        return 0;
    }
    if (arr[x][y] == 1) {
        return 0;
    }
    if (x == arr.length - 1 && y == arr.length - 1) {
        return 1;
    }
    return getUniquePaths(arr, x + 1, y) + getUniquePaths(arr, x, y + 1);


}
var createMatrix = function (n) {
    // Create one dimensional array 
    var arr = new Array(n);

    // Loop to create 2D array using 1D array 

    for (var i = 0; i < arr.length; i++) {
        arr[i] = [];
    }


    for (var i = 0; i < n; i++) {
        for (var j = 0; j < 3; j++) {
            if (i == 1 && j == 1) {
                arr[i][j] = 1;
            }
            else {
                arr[i][j] = 0;
            }
        }
    }
    return arr;
}

//Creating matrix first
// var arr = createMatrix();
// console.log(arr[0][0], " ", arr[1][1]);
// arr[1][2] = 1;
// var count = getUniquePaths(arr, 0, 0);
// console.log("Unique Paths: " + count);





//Problem 4
//Rotate 2-D array

// If the array is

// [
//     [1, 2],
//     [3, 4]
// ]
// Then the rotated array becomes:

// [
//     [3, 1],
//     [4, 2]
// ]

//Creating matrix first
var createMatrixWithValues = function (n) {
    // Create one dimensional array first
    var arr = new Array(n);

    // Loop to create 2D array using 1D array 

    for (var i = 0; i < arr.length; i++) {
        arr[i] = [];
    }
    arr[0][0] = 1;
    arr[0][1] = 2;
    arr[1][0] = 3;
    arr[1][1] = 4;
    return arr;
}


var arr = createMatrixWithValues(2);
// console.log(arr[0][0], " ", arr[1][1]);
//Solution
//https://www.geeksforgeeks.org/inplace-rotate-square-matrix-by-90-degrees/




//Problem 5
// //Sqrt of an integer
// var getSqRt = function (num) {
//     if (num == 0 || num == 1) {
//         return num;
//     }
//     var i = 1;
//     var result = 1;

//     while (result <= num) {
//         i++;
//         result = i * i;
//     }
//     return i - 1;
// }

// console.log(getSqRt(21));






//Problem 6
//Array Rotation
// var rotateArray = function (arr, NoOfTimes) {

//     for (var i = 0; i < NoOfTimes; i++) {
//         var firstValue = arr[0]; // temporarily store first element
//         for (var j = 0; j < arr.length - 1; j++) {
//             arr[j] = arr[j + 1]; // Move elements 1 position to the left
//         }
//         arr[j] = firstValue;
//     }
//     return arr;
// }

//var rotatedArray = rotateArray([2, 3, 5, 8, 11, 12], 3);
//console.log(rotatedArray.join(", "));
//8, 11, 12, 2, 3, 5
//With the above approach we can also answer
//How many times is a sorted array rotated?
//Ans: Index of Minimum Element

// //To Search Index of mimimum elment(to get the number of times array is rotated) using Binary Search instead of Linear Search as shown below

// var findRotationCountByFindingIndexOfMin = function (arr) {
//     var low = 0;
//     var high = arr.length - 1;

//     while (low <= high) {
//         // Case 1: Checking if array is not rotated then lowest element is at the start
//         //No need to split the array in half
//         if (arr[low] <= arr[high]) {
//             return low;
//         }

//         //Case 2: if middle element is the pivot
//         var mid = Math.round((low + high) / 2);
//         var next = (mid + 1) % arr.length;
//         var prev = (mid - 1) % arr.length;
//         //If element to the right of pivot is bigger than pivot and element to the left of pivot is greater than picot
//         //then pivot is the index
//         if (arr[mid] < arr[next] && arr[mid] < arr[prev]) {
//             return mid;
//         }
//         //If the array is not sorted
//         else if (arr[mid] <= arr[high]) {
//             high = mid - 1;   //left half  Example  17,4,5,8,11,13   8 is mid, but pivot to be find is 4
//         }
//         else if (arr[mid] >= arr[low]) {
//             low = mid + 1;    //right half   Example 8, 11, 13,17, 4, 5     17 is mid, pivot to be find 4
//         }
//     }
//     return -1;

// }



// var minimumElementIndex = findRotationCountByFindingIndexOfMin([12, 2, 3, 5, 8, 11]);
// console.log(minimumElementIndex);


//Problem 7
//Finding a needle in haystack- Pattern Matching
// Needle and Haystack are 2 string variables, you have to find if Needle variable exist anythwre in haystack varaible
//If exists than return the starting index of first occurence

// var findingMatchingPattern = function (needle, hayStack) {

//     var hayStackLength = hayStack.length;
//     var needleLength = needle.length;
//     if (needleLength == 0) {
//         return -1;
//     }
//     for (var i = 0; i < hayStackLength - needleLength; i++) {
//         for (var j = 0; j < needleLength; j++) {
//             if (hayStack.charAt(i + j) != needle.charAt(j)) {
//                 break;
//             }
//         }
//         if (j == needleLength) {
//             return i;
//         }
//     }
//     return -1;

// }
// var indexOfFirstoccurence = findingMatchingPattern("ll", "hello");
// console.log(indexOfFirstoccurence);




//Problem 8
//Integer to Roman number
//https://www.youtube.com/watch?v=JyLrPSJNfYw

// var intToRoman = function (A) {


//     var thousands = ["", "M", "MM", "MMM"];
//     var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
//     var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
//     var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];


//     return thousands[A / 1000] +
//         hundreds[(A % 1000) / 100] +
//         tens[(A % 100) / 10] +
//         ones[A % 10];
// }

// //4- IV
// //14 - XIV
// //114 - XXIV
// //1114 - CXXIV
// console.log(intToRoman(11));






//Problem 9
//Reversing an interger

// var reverseInteger = function (n) {
//     var tempN = n;
//     var reversedInteger = 0;
//     while (tempN > 1) {
//         var temp = Math.floor(tempN % 10); //find unit digit, then tens digit, then hundred digit , etc
//         reversedInteger = reversedInteger * 10 + temp;
//         tempN /= 10;
//     }
//     return reversedInteger;
// }
// var reversedNumber= reverseInteger(12345678);
// console.log(reversedNumber);




//Problem 10 - Find total occurences of all individual charcters in J in string S
//Charcters in string J are always unique
//J="aA" S="aAbbba" //Output should 3
//J="aA" S="BBccd" //Output should 0

//Solution 1
// var findOccurnces = function (J, S) {
//     var sLen = S.length;
//     var jLen = J.length;
//     var sum = 0;
//     if (jLen == 0) {
//         return 0;
//     }
//     var l = 0;
//     var obj = {};
//     for (var i = 0; i < jLen; i++) {
//         obj[J[i]] = 1;
//     }

//     for (var i = 0; i < sLen; i++) {
//         sum += obj[S[i]] || 0;
//     }
//     console.log(sum); 

// }

//Solution 2 - Using inbuilt functions
// var findOccurnces = (J, S) => {
//     var k = S.split('').filter(x => J.includes(x)).length;
//     //var k = S.split('').filter(x => J.includes(x)) ---- returns ["a","A","a"]
//     console.log(k);
// }


// var J = "aA";
// var S = "aAbbba";
// console.log(findOccurnces(J, S));





//Problem 11
// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function 
// that will return true if the ransom note can be constructed from the magazines ; 
// otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true


//Solution
// var canConstruct = function (J, S) {
//     var sLen = S.length;
//     var jLen = J.length;
//     for (var i = 0; i <= sLen - jLen; i++) {
//         var k = i;
//         for (var j = 0; j < jLen; j++) {

//             if (S[k] != J[j]) {
//                 break;
//             }
//             else {
//                 k++;
//             }
//         }
//         if (j == jLen) {
//             return true;
//         }
//     }
//     return false;

// }
// var result = canConstruct("aa", "aab");
// console.log(result);



//Problem 12
//find complement of a number
//Complement of 5 will be calcaulted as:
//binary of 5 is 101 and complemnet would 010(reversing 1s with 0s) which is 2
// var findComplement = function (n) {
//     var binRep = n.toString(2);// this will give binary rep of a number e..g for 5 it will return 101
//     var mask = Math.pow(2, binRep.length) - 1;
//     return ~n & mask;

// }
// console.log(findComplement(5)); //Output should 2





//Problem 13
// var firstNonRepeatingCharcter = function (str) {
//     for (var i = 0; i < str.length; i++) {
//         var c = str.charAt(i);
//         //this will return first index
//         //console.log(str.indexOf(c))
//        // This mean Second index, first index + 1
//        // console.log(str.indexOf(c, i + 1));
//         if (str.indexOf(c) == i && str.indexOf(c, i + 1) == -1) {
//             return str.indexOf(c);
//         }
//     }
//     return null;
// }
// console.log(firstNonRepeatingCharcter("leetC")); //Output 0 , index of l
// console.log(firstNonRepeatingCharcter("loveleetcode")); //Output 2 , index of v



// //Problem 14
// Find if 2 nodes in a tree are cousins
//Nodes are cousins if they are at same height and they do not have same parent
//https://www.youtube.com/watch?v=UyxnGWMvxwc
//See 5Trees.js file for solution



//Problem 15
// Maximum Sum Path ina tree
//https://www.youtube.com/watch?v=TO5zsKtc1Ic





//Problem 16
// Verifying an Alien Dictionary
//https://leetcode.com/problems/verifying-an-alien-dictionary/

// var isAlienSorted = function (words, order) {
//     var wordCount = words.length;
//     for (var i = 0; i < wordCount - 1; i++) {
//         var len1 = words[i].length;
//         var len2 = words[i + 1].length;
//         var x = 0;
//         while (x < len1 && x < len2) {
//             var char1 = words[i][x];
//             var char2 = words[i + 1][x];

//             if (order.indexOf(char1) < order.indexOf(char2)) {
//                 break;
//             }
//             else if (order.indexOf(char1) > order.indexOf(char2)) {
//                 return false;
//             }
//             else if (x == Math.min(len1, len2) - 1 && words[i].length > words[i + 1].length) {
//                 return false;
//             }
//             x++;
//         }
//         return true;
//     }
// };
// //console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"))
// //console.log(isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"))
// console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"))





//Problem 17
// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.
//https://leetcode.com/problems/maximum-product-subarray/



//Problem 18
//Maximum Sum Contigous Subarray Problem
//https://www.youtube.com/watch?v=86CQq3pKSUw




//Problem 19
//Maximum product(multiplication) Contigous Subarray Problem
//https://leetcode.com/problems/maximum-product-subarray/
//https://www.youtube.com/watch?v=6jfEsCvjcF8


//Problem 20
//You are given a list of flight start and end times. 
//Determine the maximum amount o airplanes in the air at the same time.
//Example:
//Start: 2, End 5
//Start: 3, End 7
//Start: 8, End 9


// var maxAirplanes = function (arr) {
//     arr.sort((a, b) => a["s"] - b["s"]);
//     console.log(arr);
//     var obj = {};
//     var currentMaxSum = 0;
//     var tempAirlines = [];
//     arr.forEach(element => {
//         tempAirlines.push(element);
//         tempAirlines = tempAirlines.filter(x => x["l"] > element["s"]);
//         if (currentMaxSum < tempAirlines.length) {
//             currentMaxSum = tempAirlines.length;
//         }
        
//     });    

// }
// // var a = { s: 2, l: 5 }
// // var c = { s: 8, l: 9 }
// // var b = { s: 3, l: 7 }
// // var d = { s: 8, l: 9 }

// var a = { s: 4, l: 8 }
// var b = { s: 2, l: 5 }
// var c = { s: 17, l: 20 }
// var d = { s: 10, l: 21 }
// var e = { s: 9, l: 18 }

// var arr = [];
// arr.push(a);
// arr.push(b);
// arr.push(c);
// arr.push(d);
// arr.push(e);

// var maxPlanes = maxAirplanes(arr)
// console.log(maxPlanes);





//Problem 10
//

// var reverseInteger = function (n) {

// }
// var reversedNumber = reverseInteger(12345678);
// console.log(reversedNumber)

