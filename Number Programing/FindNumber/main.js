// JavaScript Program to Find the Missing Number

// Approach 1: Using the Mathematical Approach (Summation of first N natural Numbers)


let arr =[1,2,3,4,7,8,9];

function findNumber(){

    let n= arr.length+1;
    let sumOf = n*(n+1)/2;

    let SumOfArray=0;
    for (let i=0; i<n-1;i++){
        SumOfArray= SumOfArray+arr[i];
    }
let missnumber = sumOf-SumOfArray;
console.log(missnumber)
}
findNumber()