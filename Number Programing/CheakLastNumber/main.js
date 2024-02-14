// JavaScript Program to Check if Two Numbers have Same Last Digit

// Using the Modulus Operator (%)

function cheakNumber(n1,n2){

    let val = n1%10;
    let val1 =n2%10;

if (val===val1)
{
    return true;
}
return false

}
console.log(cheakNumber(155,125))

// Converting Numbers to Strings using toString() Method

function numberMehtod(n1,n2){
    let num = n1.toString().slice(-1);
    let num1 = n2.toString().slice(-1);

    return num==num1;

}
console.log(numberMehtod(155,12355))

// Using the Array of Digits using the Spread Operator

function methodNumber(n1,n2){
 
    let Digit= [...n1.toString()]
    let Digit1= [...n2.toString()]

return Digit.length-1==Digit1.length-1;


}
console.log(methodNumber(85,95))

// Using the Bitwise AND Operator

function cheakMethod(n1,n2){

    let Digit =n1 &1;
    let Digit1 =n2 &1;

    return Digit==Digit1;
}
console.log(cheakMethod(47,78))
