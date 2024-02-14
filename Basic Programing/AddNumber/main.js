// JavaScript Program to Add Two Numbers


// 1. Using + Operator


let a =37;
let b= 36;

console.log(a+b);



//2.  Using function

function add (a, b){
    return a+b
}
console.log(add(37,36))


//3.  Using Arrow function

let  sum = (a, b) => a+b ;
let sum1= 37;
let sum2 =36;
let s =sum(sum1,sum2)
console.log(s)

//4.  Using Addition Assignment (+=) Operator

let val = 36;
let val1 = 37;

let value= val+=val1;

console.log(value)


// How to add float numbers using JavaScript ?


// 1. Using parseFloat() and toFixed() method

let r = 45.65;
let y = 987.2563;

let m =r+y;
console.log(parseFloat(m).toFixed(1));
console.log()


// 2. Using parseFloat() and Math.round() method

console.log(parseFloat(m))
console.log(Math.round(m))
