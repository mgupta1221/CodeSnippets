'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}
function inventoryList() {
    var self=  this;
    let items={};
    function add(name){
        if(!this.items[name]){
            this.items[name]=name;
        }   
    }
    function remove(name){
        console.log(this.items)
        if(this.items[name]){
            delete this.items.name;
        }   
    }
    function getList(){
        return Object.keys(this.items);
    } 
    return {
        items: items,
        add:add,
        remove:remove,
        getList:getList
    }
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    const obj = inventoryList();
    const operationCount = parseInt(readLine().trim());
    
    for(let i = 1; i <= operationCount; i++) {
        const operationInfo = readLine().trim().split(' ');
        if (operationInfo[0] === 'add') {
            obj.add(operationInfo[1]);
        } else if (operationInfo[0] === 'remove') {
            obj.remove(operationInfo[1]);
        } else if (operationInfo[0] === 'getList') {
            const res = obj.getList();
            if (res.length === 0) {
                ws.write('No Items\n');
            } else {
                ws.write(`${res.join(',')}\n`);
            }
        }
    }
    ws.end();
}


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'minSwaps' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function minSwaps(s) {
    // Write your code here
    var countL=0;
    var countR=0;
    var diff=0;
    var swaps=0;
    for(var i=0; i<s.length; i++){
       
        if (s[i] == '(') 
        { 
            countL++; 
            if (diff > 0) 
            {                 
                swaps += 1;  
                diff--; 
            } 
        } 
        else if (s[i] == ')') 
        {          
            countR++;        
            diff = (countR - countL); 
        } 

    }
    return swaps;

}

function main() {