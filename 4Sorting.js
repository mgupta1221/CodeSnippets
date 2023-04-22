
//Course - https://frontendmasters.com/courses/data-structures-algorithms/



var arr = [5, 3, 7, 2, 10, 9];
//console.log(arr.sort()) // Notice the result here [10,2,3,5,7]

//Bubble Sort
// var sortArray = function (arr) {
//     for (i = 0; i < arr.length; i++) {
//         for (j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 var k = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = k;
//             }
//         }
//     }
// }

// sortArray(arr);
// console.log(arr);
//Bubble Sort Ends




// //Selection Sort
// var selectionSort = function (arr) {
//     for (i = arr.length - 1; i >-1; i--) {

//         //Find max Value index

//         var maxValueIndex = getMax(arr, i);
//         //Swap with last element
//         var k1 = arr[maxValueIndex];
//         arr[maxValueIndex] = arr[i];
//         arr[i] = k1;

//     }
// }
// var getMax = function (arr, tillIndex) {
//     var maxValueIndex = 0;
//     for (k = 1; k <= tillIndex; k++) {
//         if (arr[k] > arr[maxValueIndex]) {
//             maxValueIndex = k;
//         }

//     }
//     return maxValueIndex;
// }

// selectionSort(arr);
// console.log(arr);
//Selection Sort Ends




//Insertion Sort
// var insertionSort = function (arr) {
//     for (i = 1; i < arr.length; i++) {
//         temp = arr[i];
//         j = i - 1;

//         //On value 3 in [2,6,3,7,5] iterate reverse to the values to the left of 3 
//         //from value 1 to 3 and place it at its correct position 
//         while (j >= 0 && arr[j] > temp) {
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         arr[j + 1] = temp;
//     }
// }
// console.log(arr);
// insertionSort(arr);
// console.log(arr);
//Insertion Sort Ends

// Merge Sort

// var mergeSort = function (arr) {

//     if (arr.length <= 1) {
//         return arr;
//     }

//     mid = (arr.length) / 2;
//     var left = arr.slice(0, mid);
//     var right = arr.slice(mid)
//     var leftArray = mergeSort(left);
//     var rightArray = mergeSort(right);

//     //merge Sub arrays
//     return merge(leftArray, rightArray);



// }
// var merge = function (leftSortedArray, rightSortedArray) {
//     var k = [];
//     var counter = 0;
//     var leftCounter = 0;
//     var rightCounter = 0;

//     while (leftCounter < leftSortedArray.length && rightCounter < rightSortedArray.length) {
//         if (leftSortedArray[leftCounter] < rightSortedArray[rightCounter]) {
//             k.push(leftSortedArray[leftCounter])
//             leftCounter++;
//         }
//         else {
//             k.push(rightSortedArray[rightCounter]);
//             rightCounter++;
//         }
//         counter++;
//     }

//     return k.concat(leftSortedArray.slice(leftCounter)).concat(rightSortedArray.slice(rightCounter));

//     console.log(k)
//     var ss = 1;

// }


// console.log(arr);
// var sortedArray = mergeSort(arr);
// console.log(sortedArray);


// Merge Sort ends



//Quick Sort
// https://www.youtube.com/watch?v=QN9hnmAgmOc&t=947s

// function swap(arr, leftIndex, rightIndex) {
//     var temp = arr[leftIndex];
//     arr[leftIndex] = arr[rightIndex];
//     arr[rightIndex] = temp;
// }

// var partition = function (arr, st, en) {
//     var pivot = arr[st];
//     var start = st;
//     var end = en;

//     while (start < end) {
//         while (arr[start] <= pivot) {
//             start++;
//         }
//         while (arr[end] > pivot) {
//             end--;
//         }

//         if (start <= end) {
//             swap(arr, start, end);
//         }
//     }
//     //Swapping pivot i.e. arr[0] with arr[end]

//     swap(arr, st, end);
//     return end;
// }

// var quickSort = function (arr, st2, en2) {
//     var loc;
//     if (st2 < en2) {
//         loc = partition(arr, st2, en2);
//         quickSort(arr, st2, loc - 1);
//         quickSort(arr, loc + 1, en2);
//     }
//     if (en2 - st2 === arr.length - 1) return arr;
// }


// arr = [7, 6, 10, 5, 9, 2, 1, 15, 7];
// console.log(arr);
// arr = quickSort(arr, 0, arr.length - 1);
// console.log(arr);

// // Quick sort Second approach

// var items = [7, 6, 10, 5, 9, 2, 1, 15, 7];
// function swap(items, leftIndex, rightIndex) {
//     var temp = items[leftIndex];
//     items[leftIndex] = items[rightIndex];
//     items[rightIndex] = temp;
// }
// function partition1(items, left, right) {
//     var pivot = items[Math.floor((right + left) / 2)], //middle element
//         i = left, //left pointer
//         j = right; //right pointer
//     while (i <= j) {
//         while (items[i] < pivot) {
//             i++;
//         }
//         while (items[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(items, i, j); //sawpping two elements
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort1(items, left, right) {
//     var index;
//     if (items.length > 1) {
//         index = partition1(items, left, right); //index returned from partition
//         if (left < index - 1) { //more elements on the left side of the pivot
//             quickSort1(items, left, index - 1);
//         }
//         if (index < right) {
//             console.log(index, right) //more elements on the right side of the pivot
//             quickSort1(items, index, right);
//         }
//     }
//     return items;
// }
// // first call to quick sort
// var sortedArray = quickSort1(items, 0, items.length - 1);
// console.log(sortedArray); //prints [2,3,5,6,7,9]


//Quick Sort ends