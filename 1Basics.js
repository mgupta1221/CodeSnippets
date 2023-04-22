
//Course - https://frontendmasters.com/courses/data-structures-algorithms/

//Useful function(Slice and Shift and unshift) for Array

//Converting Object to Array in javacsrpt
// An Object 
var obj = { "1": 5, "2": 7, "3": 0, "4": 0, "5": 0 };

// Using Object.keys() and map() function 
// to convert convert an Object {} to an  
// Array [] of key-value pairs 

var result = Object.keys(obj).map(function (key) {

    // Using Number() to convert key to number type 
    // Using obj[key] to retrieve key value 
    return [Number(key), obj[key]];
});

//[[1,5], [2,7]...]
//result
// 0: (2) [1, 5]
// 1: (2) [2, 7]
// 2: (2) [3, 0]
// 3: (2) [4, 0]
// 4: (2) [5, 0]

//Second way to convert 
// An Object 
var obj = { "1": 500, "2": 15, "5": 4, "4": 480, "10": 87 };

// Using Object.entries() function 
// to convert convert an Object {} to an  
// Array [] of key-value pairs 
var result = Object.entries(obj);
console.log(result);
// 0:  ["1", 500]
// 1:  ["2", 15]
// 2:  ["4", 480]
// 3:  ["5", 4]
// 4:  ["10", 87]



//Custom Sorting 
//items.sort((a, b) => a - b);

//Using Array.from()
// var s = "cheeze";
// var items = Array.from(s);  // Array.from converts a string into array -- ["c", "h", "e", "e", "z", "e"]



//taking sum of all using reduce() method object values;
//const sumValues = Object.values(obj).reduce((a, b) => a + b);
//console.log(sumValues);

//Reduce method
//https://www.w3schools.com/jsref/jsref_reduce.asp
// The reduce() method reduces the array to a single value.
// The reduce() method executes a provided function for each value of the array (from left-to-right).
// The return value of the function is stored in an accumulator
// Note: this method does not change the original array.


function myFunction() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var item = fruits.slice(0, 2); // Start from 0th index and take 2 elements , result is Banana and Orange in an array
    //     //Slice will not change the original array object, it will give a result with array data type 
    console.log(item);        //item= ["Banana", "Orange"]
    //console.log(fruits);
    //Remember shift is a function for Arrays not strings
    var item = fruits.shift();  // It wil return the first element of the array in an string format(not an array), 
    //Shift will change the original array object
    console.log(item);  // item =Banana 
    //console.log(fruits);

    //Unshift -- Add new items to the beginning of an array:
    fruits.unshift("Lemon", "Pineapple");
    console.log(fruits);  //fruits- ["Lemon", "Pineapple", "Orange", "Apple", "Mango"]
}
myFunction();



//Creating 2 dimesnional array/grid in Javascript
// Create one dimensional array 
var arr = new Array(3);

// Loop to create 2D array using 1D array   
for (var i = 0; i < arr.length; i++) {
    arr[i] = [];
}


//Writing Data Structure in Javascript for all problems with Constructor function, properties and protoype methods
// function building(floors) {
//     //this={}
//     this.floor = floors;
//     //return this
//   }

//   building.prototype.countFloors= function (){
//     return this.floor;
//   }
//   var myHouse = new building(4);
//   console.log(myHouse.floor);
//   console.log(myHouse.countFloors());  
//   //New keyword creates and object and return it.

//   ENDS


//Check for Linked List and trees basis Model in respective 

//exercise:
function print(index) {
    let arr = new Array(8000).fill('hi');
    console.log(arr[index]);

 }

 print(688);
function print() {
    let arr = new Array(8000).fill('hi');
    return function (index) {
        console.log(arr[index]);
    }

}
var getItem= print();
getItem(688);
getItem(702);
getItem(80);
