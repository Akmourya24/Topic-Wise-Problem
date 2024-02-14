// JavaScript Program to Check for Palindrome Number

// Using String Reversal

function cheakNumber(num) {
    let strNum = num.toString();
    let result = strNum.split('').reverse().join('')
    return strNum === result
}
console.log(cheakNumber(121))
console.log(cheakNumber(123))
console.log(cheakNumber(12321))

// Using Array Every() method

function reverseNumber(num) {
    let numarr = num.toString();
    let val = numarr.split('');
}

// Using XOR Operator
// Using for Loop and Math.floor() Method
