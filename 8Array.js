// var arr= [1,2]
// var mergedArray= arr.concat([3,4]);
// console.log(arr); //1,2
// console.log(mergedArray); //1,2,3,4


//Array Rotation

var rotateArray = function (arr, d) {

    for (var i = 0; i < d; i++) {
        var temp = arr[0];
        //Move elements from 'i+1' index to index 'i'
        for (var j = 0; j < arr.length - 1; j++) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }

        //Put element as arr[0]
        arr[arr.length - 1] = temp;
    }
    return arr;
}

var rotatedArray = rotateArray([1, 2, 3, 4, 5], 4)

console.log(rotatedArray);

//One liner solution for array rotation

// let rotate = function (nums, k) {

//     // pop() will remove the last item in the array and will return it as a result
//     //shift() will pull the first element out of the array and return as result
//     for (let i = 0; i < k; i++) nums.push(nums.shift());
//     return nums;
// };

// var rotatedArray = rotate([1, 2, 3, 4, 5], 4)

// console.log(rotatedArray);



//Merge 2 sorted arrays

// var merge = function (arr1, arr2) {
//     var len1 = arr1.length;
//     var len2 = arr2.length;
//     var index1 = 0;
//     var index2 = 0
//     var mergedArray = [];

//     while (index1 < len1 && index2 < len2) {
//         if (arr1[index1] > arr2[index2]) {
//             mergedArray.push(arr2[index2]);
//             index2++;
//         }
//         else {
//             mergedArray.push(arr1[index1]);
//             index1++;
//         }
//     }

//     var p = mergedArray.concat(arr1.slice(index1)).concat(arr2.slice(index2))
//     return mergedArray;
// }


// var mergedArray = merge([2, 4, 6], [1, 3, 5, 7, 9, 11])
// console.log(mergedArray);







