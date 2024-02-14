// JavaScript Program to Check if a Number is Odd or Even


// Using the modulo Operator %

function CheckNumber(num){
    if (num%2==0){
        console.log("Number is Even:" ,num)
    }
    else{
        console.log("Number is Odd:", num)
    }

}
CheckNumber(5432154)



// Using Bitwise & Operator

function Check(num){
if (num & 1 ==1){
    return "Number is Odd:" +num;
}
return "Number is Even" +num;
}
console.log(Check(4859))




// Using Bitwise OR Operator (|)


function Checkval(num){
    return (num |1) ===num ? "odd":"even";    
    
}
console.log(Checkval(92455450))



// Using Ternary Operator


function Checknum(num){
     return num%2 ==0 ? "even":'odd'
    
    }
    console.log(Checknum(7852))