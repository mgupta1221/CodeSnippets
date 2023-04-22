//Get ALl Permutations of a string
//TODO


// Number of occurences of each charcter in a string

// var countOccurences = function (str) {
//      var length = str.length;
//      var counter = {};

//      for (var i = 0; i < length; i++) {

//           //This is important function
//           var char = str.charAt(i);

//           if (char in counter) {
//                counter[char]++;
//           }
//           else {
//                counter[char] = 1;
//           }

//      }
//      console.log(JSON.stringify(counter));
// }

// countOccurences("CHEEZE");





//Delete duplicates in a string
// var s = "cheeze";
// var items = Array.from(s);  // Array.from converts a string into array -- ["c", "h", "e", "e", "z", "e"]

// //filter function takes the value if result returned is true, else rejects the value in iteration
// var uniques = items.filter(function (value, index, self) {
//      // self here will be   ["c", "h", "e", "e", "z", "e"] always

//      return self.indexOf(value) === index;
// }).join(',')
// console.log(uniques);  // Result    c,h,e,z

// // Without join uniques will be ["c", "h", "e", "z"]




// var s = "cheeze";
// var items = Array.from(s);
// var uniques = items.filter(function (value, index, self) {
////self.indexOf wil always return the first occurence index
//      return self.indexOf(value) === index;
// }).join("")
// // Notice the differnce between join with comma and blank 
// console.log(uniques);  // result- chez



//remove duplicate charcaters -- Another way
var removeDuplicates = function (str) {
     var strlen = str.length;
     var obj = {};
     var arrayWithUniqueItems = [];
     for (var i = 0; i < strlen; i++) {
          //Setting object properties with the name of string charcters and if once inserted the n do not re-insert
          if (!obj[str[i]]) {
               //if the value in obj[str[i]] is set to 'undefined' below, it will be considered that property is not present in object
               //Henc e a valid value is required for 'if' check to work above
               obj[str[i]] = str[i];
               arrayWithUniqueItems.push(str[i]);
          }
     }
     return arrayWithUniqueItems.join("");
}
console.log(removeDuplicates("cheeze"));
//Same Approach can be used to find if all elements are unique in a string



//Remove all duplicates (sentences that have the same exact words, but in different order) from the array. 
//So for example "this is a sentence" and "is this a sentence" are duplicates. Only one of them should remain in the array 

// var va = ["this is a sentence", "sentence this is", "sentence this is a"]
// var vb = {};
// var vc = [];


// for (var a = 0; a < va.length; a++) {
//      vb = va[a].split(" ").sort().join(" ");
//      if (!vc[vb]) {
//           vc.push(va[a]);
//           vc[vb] = true;
//      }
// }
// console.log(vc.join(','));
