// JavaScript Program to Find the Sum of Natural Numbers

// Using for Loop

function sumNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {

        sum+=i;
    }
    console.log(sum);

}
sumNumber(10)

// Using Recursion

function number(n){
    if (n!==0){
        return n+number(n-1)

    }
    return n;

}
console.log(number(5))

// Using Mathematical formula

function add (num){
    return num*(num+1)/2;

}
console.log(add(100))


// JavaScript Program to Find the Sum of squares of  Natural Numbers

function addfirst(num){
    return [num*(num+1)*((2*num)+1)]/6;

}
console.log(addfirst(4))


// JavaScript Program to Find the Sum of cube of  Natural Numbers

function addthird(num){
    return (num*(num+1)/2)*(num*(num+1)/2);

}
console.log(addthird(3))


