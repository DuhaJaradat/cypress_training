/// <reference types ="cypress" />

const { result, lte } = require("cypress/types/lodash");


// describe - it
// BDD - Gherkin langauge  - Cucumber Given , When , Then 
//comment 
/* comment multilines
 line 1
line 2
 */  


describe("",()=>{

});

// functions in js (invoke ) call back function 

function myfirstfunction(p1,p2){
    return p1 + p2;
}

//console.log("hello")
//console.log(myfirstfunction(5,2))

/* how to definde variables 
1-let
2- var
3-const
 */

//arrow function 

let result = (p1,p2) =>{
    return p1 + p2;
}
let result2 =()=>{
    return"cypress";
}
console.log(result(5,2));
console.log(result2);

