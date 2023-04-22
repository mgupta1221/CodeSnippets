



// find if array has all unique values
//This method below uses CACHING

// var isUnique = function (arr) {
//      var result;
//      var breadcrumb = {};
//      for (var i = 0; i < arr.length; i++) {
//           if (breadcrumb[arr[i]] === true) {
//                return false;
//           }
//           else {
//                breadcrumb[arr[i]] = true;
//           }
//      }
//      return true;
// }

// //var arr = [1, 3, 3];
// var arr = [1, 2, 3];
// var isArrayUniique = isUnique(arr);
// console.log(isArrayUniique);


//Remove duplicates from using caching

//Solution 1
// var a= ["aa", "ab","ba","ba","ab"]
// console.log([...new Set(a)])   //Set operator
// //Result:  ["aa", "ab", "ba"]


//Solution 2
// var RemoveDuplicatesFromArray = function (arr) {
//      var resultArray = [];
//      var result = {};
//      for (var i = 0; i < arr.length; i++) {
//           if (!result[arr[i]]) {
//                //If element is NOT present in result OBJECT then push it in resultant array
//                // and set result object property to true
//                resultArray.push(arr[i]);
//                result[arr[i]] = true;
//           }
//      }
//      return resultArray;
// }

// var arr = [1, 7, 12, 2, 3, 4, 6, 7, 1, 4, 8, 6, 12];
// var arrayWithoutDuplicates = RemoveDuplicatesFromArray(arr);
// console.log(JSON.stringify(arrayWithoutDuplicates.join(',')));



//Get Factorial 
// var getFactorial = function (n) {
//      if (n == 1) return 1;
//      return n * getFactorial(n - 1);

// }

// console.log(getFactorial(3));




//Memoization with Global Cache 
//  https://repl.it/@bgando/memoize-exercise-1-solution
const times10 = (n) => (n * 10);
// Task 2: Use an object to cache the results of your times10 function. 
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

// const cache = {};

// const memoTimes10 = (n) => {
//      if (n in cache) {
//           console.log('Fetching from cache:', n);
//           return cache[n];
//      } else {
//           console.log('Calculating result');
//           let result = times10(n); //90
//           cache[n] = result;
//           return result;
//      }
// };

// console.log(memoTimes10(9));	// calculated
// console.log(memoTimes10(9));	// cached





//Memoization with CLOSURE  - Replacing Global Cache n Above example in below solution
// This example replaces Global Cache object from above example with Closure objct
// var memoizedClosuretimes10 = () => {
//      let cache = {};  // This variable is Closure Variable which wil always remain saved and is Private, not Global anymore
//      return (n) => {
//           if (n in cache) {
//                return cache[n];
//           }
//           else {
//                cache[n] = n * 10;
//                return cache[n];
//           }
//      }
// }

// const memoClosutrTimes10 = memoizedClosuretimes10();
// console.log(memoClosutrTimes10(9));
// console.log(memoClosutrTimes10(9));  //Now 9 will be available in cache
// console.log(memoClosutrTimes10(10));




// Joining elements with  Recursion 
// function joinElements(arr, e) {

//      function execute(index, resultSoFar) {
//           if (index === arr.length) {
//                return resultSoFar;
//           }
//           else {
//                var temp = arr[index] + e;
//                resultSoFar += temp;
//                return execute(index + 1, resultSoFar);
//           }
//      }
//      return execute(0, '');
// }

// console.log(joinElements(['s', 'cr', 't cod', ':) :)'], 'e'));





//Linear Search in Sorted array
// var linearSearch = function (arr, element) {
//      var result = false;
//      for (var i = 0; i < arr.length; i++) {
//           if (element==arr[i]) {
//                result = true;
//                return result;
//           }         
//      }
//      return result;
// }

// var trueOrFalse = linearSearch([12, 34, 65, 90, 120], 90);
// console.log(trueOrFalse);





//Binary Search in Sorted array using While loop
// function binarySearch(list, item) {
//      var min = 0;
//      var max = list.length - 1;
//      var guess;

//      while (min <= max) {
//          guess = Math.floor((min + max) / 2);

//          if (list[guess] === item) {
//              return guess;
//          }
//          else {
//              if (list[guess] < item) {
//                  min = guess + 1;
//              }
//              else {
//                  max = guess - 1;
//              }
//          }
//      }

//      return -1;
//  }

//  binarySearch([2,6,7,90,103], 90);








//Binary Search in Sorted array using recursion
// var BinarySearch = function (arr, element) {
//      var result = false;
//      var mid = Math.floor(arr.length / 2);
//      if (arr.length < 1) {
//           return false;
//      }
//      if (element == arr[mid]) {
//           result = true;
//           return result;
//      }
//      else {
//           if (element < arr[mid]) {
//             return   BinarySearch(arr.slice(0, mid), element)
//           } else {
//             return   BinarySearch(arr.slice(mid + 1), element);
//           }
//      }

//      return result;
// }

// var trueOrFalse = BinarySearch([12, 34, 65, 79, 90, 111, 120], 112);
// console.log(trueOrFalse);



var coins = [65, 79, 12, 34, , 90, 120, 111];
coins.sort();
console.log(coins);










