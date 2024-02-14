// How to swap two variables in JavaScript ?

// Using Temporary variable

let x=40;
let y=50;
console.log(x,y);

let swap;
swap=x;
x=y;
y=swap;
console.log("swap Number",x,y);



// Using Arithmetic Operations

x= x+y;
y=x-y;
x =x-y;
console.log("swap Number",x,y);

// Using destructing Assignment

let a=30;
let b=20;
console.log(a,b);

[a,b]=[b,a]
console.log("swap Number",a,b);

// Using XOR Bitwise Operator

let m=10;
let n=60;
console.log(m,n);

 m= m^n;
 n= m^n;
 m= m^n;
    console.log("swap Number",m,n);

