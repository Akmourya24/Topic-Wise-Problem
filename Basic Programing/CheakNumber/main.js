// JavaScript Program to Check if a number is Positive, Negative, or Zero

// Using Switch Statement

function check(num) {
    switch (Math.sign(num)) {
        case 1:
            console.log("Numbr is positive");
            break;


        case -1:
            console.log("Numbr is Nagative");
            break;

        default:
            console.log("Numbr is Zero");

    }

}
check(12);
check(-190);
check(0);


// Using if-else Statements
solved = ((num) => {

    if (num > 0) {
        console.log("Number is Positive:" + num);

    }
    else
        if (num < 0) {
            console.log("Number is Nagative:" + num);

        }
        else {
            console.log("Number is Zero:" + num);

        }
});
    solved(47);
     solved(-47);
     solved(0);



// Using Ternary O perator

    function myNum(num) {
        return num==0 ?"number is zero": num > 0 ? "positive" : "negative";
    }
    console.log(myNum(0))