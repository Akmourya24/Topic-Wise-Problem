// How to find largest of three numbers using JavaScript ?

// Using Conditional Statements (if-else)

function largestNumber(a,b,c){
    if (a>b & a>c){
        console.log("A is biggest Number :"+a);
    }
    else if(b>a& b>c){
        console.log("B is biggest number:"+b);

    }
    else{
        console.log("C is biggest Number:"+c);
    }
}
largestNumber(121,45,13)

// Using the Math.max() Method

let a =456;
let b=37;
let c=4238;
let bignumber = Math.max(a,b,c)

console.log("biggest number is :"+bignumber)

// Using the Spread Operator with Math.max()

function biggestNumber(a,b,c){
return Math.max(...[a,b,c])

}
console.log("bigges Number is :"+biggestNumber(45,21,39))
// Using the Ternary Operator

function bigNumber(a,b,c) {
    return a>=b&&a>=c?a
    :b>=a&&b>=c?b
    :c;
}
console.log("biggest Number is :"+bigNumber(25,85,93))
   

// Using Array.sort()
function higgestNumber(){
    let arr =[85,20,96];
    arr.sort((a,b)=>(a-b));
 return arr[arr.length-1]
 
 
}
console.log("biggest Number is :"+higgestNumber())

// this is sort method

let att =[7,85,841,8,11,89,1,58,10,9]

let s = att.sort((a,b)=>(a-b));
console.log(s)