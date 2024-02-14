// JavaScript Program for Armstrong Numbers

// Using toString() and split() Method

function isArmstrong(num){
    let digits =num.toString().split('')
    let order = digits.length;
    const sum = digits.reduce(
        (acc, digit) =>
            acc + Math.pow(parseInt(digit), order), 0);    
    if (num===sum){
        console.log(num+ "is a armstrong number")

    }
    else{
        console.log(num+ " is not a armstong number")
    }
}

isArmstrong(9474)
isArmstrong(944)


// Using naive Method
// Using Array.from() Method 
// Using Array Reduce
