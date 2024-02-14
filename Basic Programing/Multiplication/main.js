// JavaScript Program for Multiplication of Two Numbers

// Table of Content

// 1. Using “*” Operator

let a =46;
let b= 47;
let mul =a*b;
console.log(mul)


// 2. Using Functions

function multi(x,y){
    return x*y;

}
console.log(multi(46,47))

// 3. Using Arrow function

let val =() => a*b;
let num =46;
let num1= 47;
let m= val(num,num1)
console.log(m)


// 4. Using Multiplication assignment operator

let number = num*=num1;
console.log(number)

// 5. Using for loop

function multiply(m,n){
let result= 0
for(let i=1; i<=n; i++) {
     result += m
}
return result;
}
console.log(multiply(46,47))


