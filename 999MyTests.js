

// function solution(X) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     var items=[

// {CategoryID: 100, ParentCategoryID:-1, Name: "Business", Keywords: "Money"},
// {CategoryID: 200, ParentCategoryID:-1, Name: "Tutoring", Keywords: "Teaching"},
// {CategoryID: 101, ParentCategoryID:100, Name: "Accounting", Keywords: "Taxes"},
// {CategoryID: 102, ParentCategoryID:100, Name: "Taxation", Keywords: null},
// {CategoryID: 201, ParentCategoryID:200, Name: "Computer", Keywords: null},
// {CategoryID: 103, ParentCategoryID:101, Name: "Corporate Tax", Keywords: null},
// {CategoryID: 202, ParentCategoryID:201, Name: "Operating System", Keywords: null},
// {CategoryID: 109, ParentCategoryID:101, Name: "Small Business Tax", Keywords: null}
// ]

// function GetKeyword(item){
//     if(item["Keywords"])
//     {
//         return item["Keywords"]
//     }
//     else{
//        var selectedItem=items.filter(x=>x.CategoryID==item["ParentCategoryID"])[0];
//        if(selectedItem)
//        return GetKeyword(selectedItem);
//     }
// }

// var selectedItem=items.filter(x=>x.CategoryID==X)[0];

// var result= Object.keys(selectedItem).map(function (x, i, item){
    
//     if(x=="CategoryID"){
//         return;
//     }
//     else if(x=="Keywords") {
//          if(item["Keywords"]){
//              return  x+"="+selectedItem["Keywords"];
//          }else{
//              var keywordValue= GetKeyword(selectedItem);
//              return  x+"="+keywordValue;
//              //return "mohit";
//          }
//     }
//     return x+"="+selectedItem[x]; 
// }).join(", ").slice(1).trim(",").length;

// return result;

// }











//Solution 2 

function solution(X) {
    // write your code in JavaScript (Node.js 8.9.4)
      var items=[

{CategoryID: 100, ParentCategoryID:-1, Name: "Business", Keywords: "Money"},
{CategoryID: 200, ParentCategoryID:-1, Name: "Tutoring", Keywords: "Teaching"},
{CategoryID: 101, ParentCategoryID:100, Name: "Accounting", Keywords: "Taxes"},
{CategoryID: 102, ParentCategoryID:100, Name: "Taxation", Keywords: null},
{CategoryID: 201, ParentCategoryID:200, Name: "Computer", Keywords: null},
{CategoryID: 103, ParentCategoryID:101, Name: "Corporate Tax", Keywords: null},
{CategoryID: 202, ParentCategoryID:201, Name: "Operating System", Keywords: null},
{CategoryID: 109, ParentCategoryID:101, Name: "Small Business Tax", Keywords: null}
]

//Helper function to get to Nth level
function getNthLevel(root, X, counter, result){
    //Base case to stop when counter is reached i.e. 'Nth level'
    if (counter==X ){
        return root;
    }
    var arr=[];
    var rootChildren= items.filter(x=>x.ParentCategoryID== root.CategoryID);
    
    if(rootChildren && rootChildren.length>0){
        for(var j=0; j<rootChildren.length;j++){
            //Making recursive call to all root's children till counter is reached
            //Increasing counter (+1) with each recursive call
            var tempResult= getNthLevel(rootChildren[j], X, counter+1, result);
            if(tempResult){
                //acccumulating all Children at Nth level in 'result'
                result.push(tempResult);
            }
        }
    }
    
}




//Getting root parents at level 1
var rootElements = items.filter(x => x.ParentCategoryID == -1);
    var result = [];
    var counter = 1;
    //Handling edge case when there is no Root Element
    if(rootElements==null || rootElements.length < 1){
        return [];
    }
    //Handling edge case if input length is 1, return all root Elements
    else if (X==1){
        return rootElements.map(x=> x.CategoryID);
    }
    
    for (var i = 0; i < rootElements.length; i++) {
        // 'result' is passed as reference to capture all Nth level CategoryIds
        getNthLevel(rootElements[i], X, counter, result)
     }
    
     var finalCatIds = result.map(function (ele) {
        return ele.CategoryID;
    })
    //console.log(finalCatIds.join(","))
    return finalCatIds;

}
